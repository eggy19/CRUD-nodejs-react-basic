import { Sequelize } from "sequelize";
import db from "../config/database.js";

const sq = Sequelize;

// Akses ke table database
const Product = db.define('products', 
{
    title: { type: sq.STRING },
    kategori: {type: sq.INTEGER},
    price: { type: sq.DOUBLE },
},
{
    freezeTableName: true  
});

export default Product;