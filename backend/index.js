import express from "express";
import db from "./config/database.js";
import routes from "./routes/index.js";
import cors from "cors";
import Kategori from "./models/kategori_Models.js";

const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.log('Connection Error : ', error);
    
}

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(5000, ()=> console.log('Server running at port  5000'));