import { Sequelize } from 'sequelize';

const database = new Sequelize('veloz_bicycle', 'root', '', {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

database
    .authenticate()
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.error(`Connected to database FAILED! ${err}`));

export default database;


// import mysql2 from 'mysql2/promise';
// import sequelize from 'sequelize';

// const database = mysql2.createPool({
//     host: '127.0.0.1',
//     port: 3306,
//     user: 'root',
//     password: '',
//     database: `veloz_bicycle`,
//     waitForConnections: true,
//     connectionLimit: 10,
//     connectTimeout: 10000,
//     maxIdle: 10,
//     idleTimeout: 60000,
//     queueLimit: 0,
//     enableKeepAlive: true,
//     keepAliveInitialDelay: 0
// })

// database
//     .getConnection()
//     .then(() => console.log('Connected to the database'))
//     .catch((err) => console.error(`Connected to database FAILED! ${err}`));

// export default database;