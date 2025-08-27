declare const config: {
    client: string;
    connection: {
        host: string | undefined;
        port: number;
        user: string | undefined;
        password: string | undefined;
        database: string | undefined;
        filename?: undefined;
    } | {
        filename: string;
        host?: undefined;
        port?: undefined;
        user?: undefined;
        password?: undefined;
        database?: undefined;
    };
    pool: {
        afterCreate: (connection: any, done: any) => void;
    };
    useNullAsDefault: boolean;
    migrations: {
        extensions: string;
        directory: string;
    };
    seeds: {
        extensions: string;
        directory: string;
    };
};
export default config;
//# sourceMappingURL=knexfile.d.ts.map