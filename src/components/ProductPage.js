import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem('Token');
        const response = await axios.get(`http://localhost:4000/products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-page">
      <div className="breadcrumbs">
        <span>Home</span> &gt; <span>Shop</span> &gt; <span>{product.name}</span>
      </div>
      <div className="product-details">
        <div className="product-images">
          <img src={product.imageUrl} alt={product.name} className="main-image" />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">Rp {product.price.toLocaleString()}</p>
          <p className="description">{product.description}</p>
          <div className="options">
            <div className="sizes">
              <span>Size:</span>
              <div className="size-options">
                <button className="selected">{product.size}</button>
                <button>XL</button>
                <button>XS</button>
              </div>
            </div>
            <div className="colors">
              <span>Color:</span>
              <div className="color-options">
                <button style={{ backgroundColor: '#6A5ACD' }}></button>
                <button style={{ backgroundColor: '#000000' }}></button>
                <button style={{ backgroundColor: '#DAA520' }}></button>
              </div>
            </div>
          </div>
          <div className="quantity-cart">
            <div className="quantity">
              <span>Quantity:</span>
              <input type="number" min="1" max={product.stock} defaultValue="1" />
            </div>
            <button className="add-to-cart">Add To Cart</button>
          </div>
          <div className="product-meta">
            <p>SKU: {product.sku}</p>
            <p>Category: {product.category}</p>
            <p>Tags: {product.tags.join(', ')}</p>
          </div>
          <div className="social-share">
            <span>Share:</span>
            <div className="social-icons">
              <img src="path-to-your-facebook-icon" alt="Share on Facebook" />
              <img src="path-to-your-twitter-icon" alt="Share on Twitter" />
              <img src="path-to-your-linkedin-icon" alt="Share on LinkedIn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
