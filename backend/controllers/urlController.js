const URL = require('../models/URL');
const shortid = require('shortid');

// Função para encurtar a URL
exports.shortenURL = async (req, res) => {
  const { url } = req.body;

  try {
    // Verifica se a URL já foi encurtada anteriormente
    const existingURL = await URL.findOne({ originalURL: url });

    if (existingURL) {
      return res.status(200).json({ shortenedURL: existingURL.shortenedURL });
    }

    // Cria um novo objeto URL
    const newURL = new URL({
      originalURL: url,
      shortenedURL: shortid.generate() // Gera um ID curto para a URL encurtada
    });

    // Salva a URL no banco de dados
    await newURL.save();

    return res.status(200).json({ shortenedURL: newURL.shortenedURL });
  } catch (error) {
    console.error('Erro ao encurtar URL:', error);
    return res.status(500).json({ error: 'Erro ao encurtar URL' });
  }
};
