const db = require('./db'); // Importe o módulo db.js
const URL = require('./models/URL'); // Importe o modelo URL que você criou

// Crie um novo documento URL
const newURL = new URL({
  originalURL: 'https://www.example.com',
  shortURL: 'abc123',
});

// Salve o novo documento no banco de dados
newURL.save()
  .then(() => {
    console.log('Documento salvo no banco de dados');
    
    // Leia o documento recém-salvo do banco de dados
    return URL.findOne({ shortURL: 'abc123' });
  })
  .then((result) => {
    console.log('Documento lido do banco de dados:', result);
  })
  .catch((error) => {
    console.error('Erro ao salvar ou ler o documento:', error);
  });
