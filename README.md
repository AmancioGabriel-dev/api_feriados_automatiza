# API de Feriados Automatiza

API para listar os feriados em cidades que a Automatiza presta serviço.

## 🚀 Como executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
src/
├── controllers/     # Controladores da aplicação
├── routes/         # Definição das rotas
└── server.ts       # Arquivo principal do servidor
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa o servidor em modo desenvolvimento com hot reload
- `npm run build` - Compila o TypeScript para JavaScript
- `npm start` - Executa o servidor em produção

## 🌐 Endpoints

- `GET /` - Rota de teste
- `GET /health` - Health check da API

## 📝 Variáveis de Ambiente

Copie o arquivo `env.example` para `.env` e configure as variáveis:

```bash
cp env.example .env
```

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express.js
- TypeScript
- CORS
- dotenv
- Zod (para validação)
- Knex.js




