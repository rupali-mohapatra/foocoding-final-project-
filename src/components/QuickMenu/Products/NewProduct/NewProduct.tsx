import React, { useState } from 'react';
import './NewProduct.css';
import { ProductType } from '../Product/Product';
import { Link } from 'react-router-dom';
const NewProduct = () => {
  const [newProductData, setNewProductData] = useState<ProductType>({
    id: 0,
    title: '',
    category: '',
    price: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _newProductData = { ...newProductData } as any;
    _newProductData[e.target.name] = e.target.value;
    setNewProductData(_newProductData);
  };
  const handlePostData = () => {
    console.log('New Product Data', newProductData);
    alert('Data posted successfully');
    fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
  };
  return (
    <div className="new-product">
      <h1>Add a new product</h1>
      <Link to="/products">Go Back</Link>
      <div className="new-product_form">
        <div className="new-product_form-group">
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={newProductData.title}
          />
        </div>
        <div className="new-product_form-group">
          
          <input
            type="image"
            src="https://cdn.pixabay.com/photo/2016/09/10/11/42/quadrocopter-1658967__480.png"
            alt=''
            onChange={handleChange}
            value={newProductData.image}
            placeholder="image"
            style={{width:"100px", height:"100px"}}
          />
          <label htmlFor="">Image</label>
          <input type="file" id="file"/>
        </div>
        <div className="new-product_form-group">
          <label htmlFor="">Category</label>
          <input
            type="text"
            name="category"
            onChange={handleChange}
            value={newProductData.category}
          />
        </div>
        <div className="new-product_form-group">
          <label htmlFor="">Description</label>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={newProductData.description}
          />
        </div>
        <div className="new-product_form-group">
          <label htmlFor="">Price</label>
          <input
            type="number"
            name="price"
            onChange={handleChange}
            value={newProductData.price}
            placeholder="$"
          />
        </div>
        <div className="new-product_form-group">
          <button onClick={handlePostData}>Save Product data</button>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
