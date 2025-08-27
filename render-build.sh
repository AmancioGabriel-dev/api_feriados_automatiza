#!/bin/bash

# Script de build para o Render
echo "🚀 Iniciando build no Render..."

# Definir variáveis de ambiente para produção
export NODE_ENV=production
export RENDER=true

echo "🔧 Variáveis de ambiente:"
echo "NODE_ENV: $NODE_ENV"
echo "RENDER: $RENDER"
echo "DB_HOST: $DB_HOST"
echo "DATABASE_URL: $DATABASE_URL"

# Instalar dependências
npm install

# Fazer build do projeto
npm run build

# Executar migrations apenas se as variáveis do banco estiverem definidas
if [ -n "$DB_HOST" ] || [ -n "$DATABASE_URL" ]; then
    echo "📊 Executando migrations..."
    npm run migrate
    
    echo "🌱 Executando seeds..."
    npm run seed
else
    echo "⚠️  Variáveis de banco não definidas, pulando migrations e seeds"
fi

echo "✅ Build concluído!"
