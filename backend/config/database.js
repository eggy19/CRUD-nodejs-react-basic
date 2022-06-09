import {Sequelize} from "sequelize";

const db = new Sequelize('fikri_fullstack', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;