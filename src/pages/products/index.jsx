import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const TABLE_HEADERS = [
  "Product Name",
  "Product Image",
  "Product Price",
  "Actions",
]

function Productspage() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const handleDelete = async (id) => {
    await axios.delete("http://localhost:3000/products" + id).then((res) => {
      if(res.status === 200){
        toast.success('Succesfully Deleted!!!')
        fetchProduct()
      }
    });
  };
  useEffect(() => {

  }, [])
  return (
    <div className="container mt-12">
      <h1 className="text-4xl font-semibold text-slate-600">Product Panels</h1>

      <table className="w-full border mt-12">
        <tr className="border">
          {TABLE_HEADERS.map((header) => <th key={header} className="border">{header}</th>)}
        </tr>
          {products?.map((product) => (
            <tr className="[&>td]:text-center divide-x border-b">
              <td className="border">
                {product.title.slice(0, 32).concat("...")}
              </td>
              <td className="border">
                <img src={product.image} className="size-32 object-contain" />
              </td>
              <td className="border">{product.price}</td>
              <td className="border">
                <Link to={`/products/${product.id}/edit`} className='bg-black text-xl inline-block py-3 mt-2 px-5 rounded-lg text-white font-semibold'>Edit</Link>
                <button onClick={() => handleDelete(product.id)} className='bg-black text-xl inline-block py-3 mt-2 px-5 rounded-lg ml-3 text-white font-semibold'>Delete</button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default Productspage;
