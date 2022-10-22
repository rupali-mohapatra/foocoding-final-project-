import React, { useState, useEffect } from 'react';
import './SingleProduct.css';
import { ProductType } from '../Product/Product';
import { Link, useParams } from 'react-router-dom';
import { MdOutlinePublishedWithChanges } from 'react-icons/md';
const SingleProduct = () => {
  
  const params = useParams();
  const [product, setProduct] = useState<ProductType>();
  const [singlePostData, setSinglePostData] = useState({});

  useEffect(() => {
    const singleProductApiUrl = `https://fakestoreapi.com/products/${params.productId}`;
    fetch(singleProductApiUrl)
      .then((response) => response.json())
      .then((json) => setProduct(json));
    console.log('Params', params);
  }, [params]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _singlePostData = { ...singlePostData } as any;
    _singlePostData[e.target.name] = e.target.value;
    setSinglePostData(_singlePostData);
  };

  const handlePostData = () => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
            body:JSON.stringify(
                {
                    title: '',
                    price: '',
                    description: '',
                    image: '',
                    category: ''
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    console.log('single Post Data', singlePostData);
    alert('Data posted successfully');
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Edit Products</h1>
        <button className="productAddBtn">
          <Link to="/products/new">Add new product</Link>
        </button>
        <Link to="/products">Go Back</Link>
      </div>
      <div className="productTop">
        {product && (
          <>
            <p>
              <img className="normal" src={product.image} alt="" />
            </p>
            <p>Title:</p>
            <span className="productDisplayDetail">{product.title}</span>

            <p>Category:</p>
            <span className="productDisplayDetail">{product.category}</span>

            <p>Description:</p>
            <span className="productDisplayDetail">{product.description}</span>

            <p>Price:</p>
            <span className="productDisplayDetail">{product.price}</span>
            
          </>
          
        )}
      </div>
      <div className="productUpdate">
        <span className="productUpdateTitle">Edit</span>
        <form className="productUpdateForm">
          <div className="productUpdateItem">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder='title'
              onChange={handleChange}
              className="productUpdateInput"
            />
          </div>
          <div className="productUpdateItem">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              placeholder='category'
              onChange={handleChange}
              className="productUpdateInput"
            />
          </div>
          <div className="productUpdateItem">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              placeholder='description'
              onChange={handleChange}
              className="productUpdateInput"
            />
          </div>
          <div className="productUpdateItem">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              placeholder='SEK'
              onChange={handleChange}
              className="productUpdateInput"
            />
          </div>
          <div className="productUpdateItem">
            <label htmlFor="image"></label>
            <input
              type="image"
              src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
              onChange={handleChange}
              className="productUpdateImage"
            />
            <label htmlFor="file">
                <MdOutlinePublishedWithChanges />
              </label>
              <input type="file" id="file"/>
          </div>
          <button onClick={handlePostData} className="productButton">
              Update
            </button>
        </form>
      </div>
    </div>
    
  );
};

export default SingleProduct;
