import sql from 'mssql';
import config from '../config.js'

const dbSettings = {
    server: config.dbServer,
    port: config.dbPort,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbDatabase,
    options: {
        encrypt: true,
        trustServerCertificate: true
    },
};

export async function getConnection() {
    try{
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (e) {
        console.log(err.message);
    }

}

export { sql };