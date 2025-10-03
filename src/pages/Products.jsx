import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products));
  }, []);

  return (
    <div>
      <h1 className="text-2xl mb-4">Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <div key={p.id} className="border p-2 rounded bg-white shadow">
            <img src={p.thumbnail} alt={p.title} className="h-32 w-full object-cover" />
            <h2 className="font-bold">{p.title}</h2>
            <p>${p.price}</p>
            <button
              onClick={() => dispatch(addToCart(p))}
              className="bg-blue-500 text-white px-2 py-1 rounded mt-2"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
