const fs = require('fs');
const CAMINHO_ARQUIVO = './dados.json';

// Função para transformar os arquivos do json em objeto (Padronizado com 'Dados' maiúsculo)
const lerDados = () => {
    const dadosbrutos = fs.readFileSync(CAMINHO_ARQUIVO, 'utf-8');
    return JSON.parse(dadosbrutos);
};

// Função pra salvar no dados.json (Padronizado com 'Dados' maiúsculo)
const salvarDados = (dados) => {
    fs.writeFileSync(CAMINHO_ARQUIVO, JSON.stringify(dados, null, 2));
};

// Composições do método GET
exports.listarUsuarios = (req, res) => {
    const usuarios = lerDados();
    res.status(200).json(usuarios);
};

// Adicionar user (POST)
exports.criarUsuario = (req, res) => {
    const usuarios = lerDados();
    const bodyreq = req.body; 
    
    // Validações
    if (!bodyreq.nome || typeof bodyreq.nome !== 'string' ||
        !bodyreq.cargo || typeof bodyreq.cargo !== 'string') {
        return res.status(400).json({
            erro: "Inconsistência de dados. Os campos 'nome' e 'cargo' são obrigatórios e devem ser strings válidas."
        });
    }
    
    const usuariohigienizado = {
        id: usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
        nome: bodyreq.nome.trim(),
        cargo: bodyreq.cargo.trim()
    };
    
    usuarios.push(usuariohigienizado);
    salvarDados(usuarios);
    res.status(201).json(usuariohigienizado);
};

// Método PUT 
exports.atualizarUsuario = (req, res) => {
    const usuarios = lerDados();
    const idParametro = parseInt(req.params.id);
    const dadosAtualizados = req.body;
    const indice = usuarios.findIndex(u => u.id === idParametro);
    
    if (indice === -1) {
        return res.status(404).json({
            erro: "Usuário não localizado no servidor."
        });
    }
    
    usuarios[indice] = { id: idParametro, ...dadosAtualizados };
    salvarDados(usuarios);
    res.status(200).json(usuarios[indice]);
};

// DELETE: Remove um usuário de maneira definitiva
exports.deletarUsuario = (req, res) => {
    let usuarios = lerDados();
    const idParametro = parseInt(req.params.id);
    const usuarioExiste = usuarios.some(u => u.id === idParametro);
    
    if (!usuarioExiste) {
        return res.status(404).json({ erro: "Usuário não localizado para exclusão." });
    }
    
    usuarios = usuarios.filter(u => u.id !== idParametro);
    salvarDados(usuarios);
    res.status(200).json({ mensagem: "Recurso removido com sucesso do servidor." });
};

// GET por ID 
exports.buscarPorId = (req, res) => {
    const usuarios = lerDados();
    const idProcurado = parseInt(req.params.id);
    
    const usuarioEncontrado = usuarios.find(u => u.id === idProcurado);
    
    if (!usuarioEncontrado) {
        return res.status(404).json({
            erro: `Recurso sob o identificador ${idProcurado} não existe.`
        });
    }
    
    res.status(200).json(usuarioEncontrado);
};