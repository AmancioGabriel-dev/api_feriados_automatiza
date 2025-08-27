# Deploy no Render

## Configuração do Banco de Dados PostgreSQL

1. No Render, crie um novo banco de dados PostgreSQL
2. Anote as credenciais fornecidas pelo Render

## Configuração das Variáveis de Ambiente

**IMPORTANTE:** No seu serviço web no Render, configure as seguintes variáveis de ambiente:

```
DB_HOST=seu-host-postgres
DB_PORT=5432
DB_USER=seu-usuario-postgres
DB_PASSWORD=sua-senha-postgres
DB_NAME=seu-nome-banco
NODE_ENV=production
```

**⚠️ CRÍTICO:** Todas as variáveis do banco (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) devem estar definidas, caso contrário o sistema tentará usar SQLite e falhará.

## Comandos de Build

Configure os seguintes comandos no Render:

**Build Command:**
```bash
chmod +x render-build.sh && ./render-build.sh
```

**Start Command:**
```bash
npm start
```

## Verificação do Deploy

Após o deploy, verifique se:

1. ✅ O arquivo `dist/server.js` foi gerado
2. ✅ As migrations foram executadas (se as variáveis do banco estiverem definidas)
3. ✅ O servidor está rodando na porta correta
4. ✅ As rotas estão funcionando

## Troubleshooting

Se ainda aparecer o erro `Cannot find module '/opt/render/project/src/dist/server.js'`:

1. Verifique se todas as variáveis de ambiente estão configuradas
2. Verifique os logs do build no Render
3. Certifique-se de que o script `render-build.sh` tem permissão de execução

## Executar Migrations e Seeds

Após o deploy, você precisará executar as migrations e seeds no banco PostgreSQL. Você pode fazer isso através do console do Render ou adicionando um script de build que execute as migrations.

## Alternativa: Usar SQLite com Volume Persistente

Se preferir manter o SQLite, você pode configurar um volume persistente no Render, mas isso requer configuração adicional.
