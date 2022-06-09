import express from "express";
import { 
    createProducts,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
 } from "../controllers/Products.js";

 import { getAllKategori, createKategori } from "../controllers/Kategori.js";

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProducts);
router.patch('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);


router.get('/kategori', getAllKategori);
router.post('/kategori', createKategori);



export default router;