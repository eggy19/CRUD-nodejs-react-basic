import Product from "../models/product_Models.js";
import Kategori from "../models/kategori_Models.js";

// ambil semua data
export const getAllProducts = async (req, res) => {
   try {
    const products = await Product.findAll();
    res.json(products);
   } catch (error) {
       res.json({messege: error.messege});
   }
}

// menampilkan berdasarkan ID
export const getProductById = async (req, res) => {
   try {
    const products = await Product.findAll({
        where: {
            id: req.params.id
        }
    });
    res.json(products[0]);
   } catch (error) {
       res.json({messege: error.messege});
   }
}

// simpan produk
export const createProducts = async (req, res) => {
    try {

        const kategori = await Kategori.findAll({
            attributes: ['id']
        });

        const jsonData = req.body[1];

        console.log(jsonData);

        console.log(kategori);
        res.json(kategori);

        // await Product.create(req.body);
        // res.json({
        //     "messege" : "Product Created"
        // });
    } catch (error) {
        res.json({messege: error.messege});
    }
 }

 // update produk
export const updateProduct = async (req, res) => {
    try {
     await Product.update(req.body, {
         where: {
             id: req.params.id
         }
     });
     res.json({
         "messege" : "Product Updated"
     });
    } catch (error) {
        res.json({messege: error.messege});
    }
 }

 //hapus produk
 export const deleteProduct = async (req, res) => {
    try {
     await Product.destroy({
         where: {
             id: req.params.id
         }
     });
     res.json({
         "messege" : "Product Deleted"
     });
    } catch (error) {
        res.json({messege: error.messege});
    }
 }