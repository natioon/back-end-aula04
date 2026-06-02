const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes');
const app = express();
// Middleware nativo obrigatório para interceptar e injetar payloads JSON vindo do corpo das requisições
app.use(express.json());
// Rota Raiz preventiva que faz a verificação se tudo ocorreu bem
app.get('/', (req, res) => {
    res.status(200).send("API Operacional. Acesse o endpoint modular através do sufixo / usuarios");
});
app.use('/usuarios', usuarioRoutes);
module.exports = app;