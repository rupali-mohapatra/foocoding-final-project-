import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

export type ProductType = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image?: string;
};
type ProductsType = Array<ProductType>;

const Product = () => {
  const [products, setProducts] = useState<ProductsType>([]);
  const fetchData = async() => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data)
}
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className="products">
      <h2>All Products</h2>
      <div className="product-list">
        {products &&
          products.map((product) => (
            <div className="products-card">
              <Link to={`/products/${product.id}`} key={product.id}>
                <p>
                  <span className="normal">{product.title}</span>
                </p>
              </Link>
              <p>
                <img className="normal" src={product.image} alt="" />
              </p>
              <p>
                Price:<span className="normal">{product.price}</span>
              </p>
              <p>
                Category:<span className="normal">{product.category}</span>
              </p>
              <p>
                Description:<span className="normal">{product.description}</span>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
