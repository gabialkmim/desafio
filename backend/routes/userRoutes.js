const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para registrar um novo usuário
router.post('/register', userController.registerUser);
// Rota para excluir uma URL do usuário
router.delete('/urls/:id', userController.deleteURL);


module.exports = router;
