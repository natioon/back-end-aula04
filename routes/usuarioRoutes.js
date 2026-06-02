const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
// ROTAS DO TIPO GET (Leitura)
router.get('/', usuarioController.listarUsuarios);// Listagem geral
router.get('/:id', usuarioController.buscarPorId);// Busca específica (ID)
// ROTA DO TIPO POST (Criação)
router.post('/', usuarioController.criarUsuario);
// ROTA DO TIPO PUT (Atualização Integral)
router.put('/:id', usuarioController.atualizarUsuario);
// ROTA DO TIPO DELETE (Remoção)
router.delete('/:id', usuarioController.deletarUsuario);
// Exportação obrigatória do módulo roteador para o app.js
module.exports = router;