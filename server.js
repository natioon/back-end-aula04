const app = require('./app');
const PORTA = 3000;
// Inicializa a escuta ativa do servidor HTTP na porta especificada
app.listen(PORTA, () => {
console.log(`Servidor ativo e aguardando requisições na porta
http://localhost:${PORTA}`);
});