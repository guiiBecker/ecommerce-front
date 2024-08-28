import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice'
import axios from 'axios';
import './ProductPage.css';
import Facebook from '../assets/images/Vectorface.jpg'
import Linkedin from '../assets/images/Vectorlink.jpg'
import Twitter from '../assets/images/Vectortwitter.jpg'

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); 
  const dispatch = useDispatch(); 

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

  const handleAddToCart = () => {
    if (product) {
      dispatch(addItem({ ...product, quantity })); 
      alert('Produto adicionado ao carrinho!'); 
    }
  };

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
              <input
                type="number"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>
            <button className="add-to-cart" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
          <div className="product-meta">
            <p>SKU: {product.sku}</p>
            <p>Category: {product.category}</p>
            <p>Tags: {product.tags.join(', ')}</p>
          </div>
          <div className="social-share">
            <span>Share:</span>
            <div className="social-icons">
              <img src={Facebook} alt="Share on Facebook" />
              <img src={Twitter} alt="Share on Twitter" />
              <img src={Linkedin} alt="Share on LinkedIn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;