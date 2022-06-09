import Kategori from "../models/kategori_Models.js";

// ambil semua data
export const getAllKategori = async (req, res) => {
   try {
    const kategori = await Kategori.findAll();
    res.json(kategori);
   } catch (error) {
       res.json({messege: error.messege});
   }
}

export const createKategori = async (req, res) => {
    try {
        console.log(req.body);
     await Kategori.create(req.body);
     res.json({
         "messege" : "Kategori Created"
     });
     
    } catch (error) {
        res.json({messege: error.messege});
    }
 }