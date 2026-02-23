const express = require('express');

const PORT = 3000;
const app = express();
app.use(express.json());

let usuarios = [
    { id: 1, nome: "Ana",    idade: 20 },
    { id: 2, nome: "Carlos", idade: 25 },
    { id: 3, nome: "Maria",  idade: 30 },
];

app.get('/usuarios', (req, res) => {
    const { nome } = req.query;
    if (nome) {
        const filtrados = usuarios.filter(u => 
            u.nome.toLowerCase().includes(nome.toLowerCase())
        );
        return res.json(filtrados);
    }
    res.json(usuarios);
});

app.post('/usuarios', (req, res) => {
    const { nome, email } = req.body || {};

    if (!nome?.trim() || !email?.trim()) {
        return res.status(400).json({
            erro: "Nome e email são obrigatórios"
        });
    }

    const novoId = usuarios.length > 0
        ? Math.max(...usuarios.map(u => u.id)) + 1
        : 1;

    const novoUsuario = {
        id: novoId,
        nome: nome.trim(),
        email: email.trim()
    }

    usuarios.push(novoUsuario);

    return res.status(201).json(novoUsuario);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});