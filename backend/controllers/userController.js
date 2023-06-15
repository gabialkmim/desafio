const User = require('../models/User');

exports.deleteURL = async (req, res) => {
    try {
      const userId = req.user.id; // Obtenha o ID do usuário autenticado
      const urlId = req.params.id; // Obtenha o ID da URL a ser excluída
  
      // Verifique se o usuário possui permissão para excluir a URL
      const url = await URL.findOne({ _id: urlId, user: userId });
  
      if (!url) {
        return res.status(404).json({ error: 'URL não encontrada' });
      }
  
      // Exclua a URL
      await url.remove();
  
      return res.status(200).json({ message: 'URL excluída com sucesso' });
    } catch (error) {
      console.error('Erro ao excluir URL:', error);
      return res.status(500).json({ error: 'Erro ao excluir URL' });
    }
  };
  
// Função para registrar um novo usuário
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verificar se o usuário já está registrado
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'Usuário já existe' });
    }

    // Criar um novo usuário
    const newUser = new User({
      name,
      email,
      password
    });

    await newUser.save();

    return res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    return res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
};
