import { useEffect, useState } from "react";
import Card from "../../components/Card";
import axios from "axios";
import Loading from "../../components/Loading";

function Homepage() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get("https://localhost:3000/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <>
      {products ? (
        <div className="container mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="mt-64">
          <Loading />
        </div>
      )}
    </>
  );
}

export default Homepage;
