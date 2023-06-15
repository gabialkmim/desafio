// Importe as dependências necessárias
const express = require('express');
const router = express.Router();

// Importe o controlador responsável pelo encurtamento de URL
const urlController = require('../controllers/urlController');

// Defina a rota para o encurtamento de URL
router.post('/api/shorten', urlController.shortenURL);

// Exporte o objeto router
module.exports = router;
