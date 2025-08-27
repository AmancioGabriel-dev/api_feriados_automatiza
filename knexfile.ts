// Verificar se as variáveis do PostgreSQL estão disponíveis
const hasPostgresConfig = process.env.DB_HOST && process.env.DB_USER && process.env.DB_PASSWORD && process.env.DB_NAME;

// Se temos configuração do PostgreSQL, usar PostgreSQL, senão SQLite
const usePostgres = hasPostgresConfig || process.env.NODE_ENV === 'production';

console.log('🔧 Configuração do Knex:');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('DB_HOST:', process.env.DB_HOST ? 'Definido' : 'Não definido');
console.log('DB_USER:', process.env.DB_USER ? 'Definido' : 'Não definido');
console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? 'Definido' : 'Não definido');
console.log('DB_NAME:', process.env.DB_NAME ? 'Definido' : 'Não definido');
console.log('hasPostgresConfig:', hasPostgresConfig);
console.log('usePostgres:', usePostgres);

// Configuração do banco de dados
const config = {
    client: usePostgres ? 'postgresql' : 'sqlite3',
    connection: usePostgres 
        ? {
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT || '5432'),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        }
        : {
            filename: "./src/database/database.db",
        },
    pool: {
        afterCreate: (connection: any, done: any) => {
            if (usePostgres) {
                // Para PostgreSQL, não precisamos do PRAGMA
                console.log('📊 Conectado ao PostgreSQL');
                done();
            } else {
                // Para SQLite
                connection.run("PRAGMA foreign_keys = ON");
                console.log('📊 Conectado ao SQLite');
                done();
            }
        }
    },
    useNullAsDefault: true,
    migrations: {
        extensions: "ts",
        directory: "./src/database/migrations"
    },
    seeds: {
        extensions: "ts",
        directory: "./src/database/seeds"
    }
};

console.log('🔧 Cliente selecionado:', config.client);
console.log('🔧 Configuração de conexão:', usePostgres ? 'PostgreSQL' : 'SQLite');

export default config;