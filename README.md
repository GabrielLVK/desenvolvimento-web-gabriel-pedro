# API de Usuários

API REST desenvolvida com Node.js e Express para gerenciamento de usuários.

## 👥 Dupla
- Gabriel
- Pedro

## 🚀 Como executar
```bash
npm install
node server.js
```

A API estará disponível em `http://localhost:3000`

## 📌 Endpoints

### GET /usuarios
Lista todos os usuários. Aceita filtro por nome via query string.

**Exemplo:** `GET /usuarios?nome=Ana`

**Resposta:**
```json
[
  { "id": 1, "nome": "Ana", "idade": 20 }
]
```

---

### GET /usuarios/:id
Busca um usuário pelo ID.

**Exemplo:** `GET /usuarios/1`

**Respostas:**
- `200` — usuário encontrado
- `400` — ID inválido
- `404` — usuário não encontrado

---

### POST /usuarios
Cria um novo usuário. Nome e email são obrigatórios.

**Body:**
```json
{
  "nome": "Lucas",
  "email": "lucas@email.com"
}
```

**Respostas:**
- `201` — usuário criado
- `400` — nome ou email ausente

---

### PUT /usuarios/:id
Atualiza os dados de um usuário existente.

**Body (campos opcionais):**
```json
{
  "nome": "Lucas Silva",
  "email": "lucas.silva@email.com",
  "idade": 22
}
```

**Respostas:**
- `200` — usuário atualizado
- `400` — ID inválido
- `404` — usuário não encontrado

---

### DELETE /usuarios/:id
Remove um usuário pelo ID.

**Respostas:**
- `204` — usuário removido com sucesso
- `400` — ID inválido
- `404` — usuário não encontrado

---

## 🔀 Processo de Desenvolvimento

O desenvolvimento foi feito seguindo o fluxo de trabalho com Git:

1. Repositório criado com branches `main` e `dev`
2. Cada membro criou sua branch `feature/`:
   - `feature/gabriel-post-e-get-todos` — endpoints GET /usuarios e POST /usuarios
   - `feature/pedro-get-put-delete` — endpoints GET /usuarios/:id, PUT e DELETE
3. Commits seguindo o padrão **Conventional Commits**
4. Pull Requests abertos para a branch `dev`
5. Conflitos resolvidos durante o merge
6. Branch `dev` mergeada na `main`