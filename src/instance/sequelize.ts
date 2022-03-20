import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
    database: 'shortener',
    host: 'localhost',
    dialect: 'postgres',
    username: 'postgres',
    password: 'root',
    logging: false, // logger on sql query
    port: 9951,
    models: [__dirname + '/model']
})