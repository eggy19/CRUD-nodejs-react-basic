import { useState, useEffect}  from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const ProductList = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () =>{
        const response = await axios.get('http://localhost:5000/products');
        console.log(response.data);
        setProduct(response.data);
    }

    const deleteProduct = async (id) =>{
        const hapus = await axios.delete(`http://localhost:5000/products/${id}`);
        console.log(hapus.data.messege);
        getProducts();
    }

  return (
    <div>
        <Link to="/add" className="button is-primary mt-2">Add New</Link>
        <table className="table is-striped is-fullwidht">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                { product.map((product, index)=> (
                <tr  key={product.id} >
                    <td>{index + 1}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <Link to={`/edit/${product.id}`} className="botton is-small is-info">Edit</Link>
                        <button onClick={() => deleteProduct(product.id)} className="botton is-small is-danger">delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ProductList