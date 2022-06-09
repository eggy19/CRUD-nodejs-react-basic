import { Sequelize } from "sequelize";
import db from "../config/database.js";

const sq = Sequelize;

const Kategori = db.define('kategori', 
{
    nama_kat: { type: sq.STRING }
},
{
    freezeTableName: true  
});

export default Kategori;