import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './RelatedProducts.css';

const RelatedProducts = () => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const token = localStorage.getItem('Token');
        const response = await axios.get('http://localhost:4000/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRelatedProducts(response.data);
        setVisibleProducts(response.data.slice(0, 4)); 
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };

    fetchRelatedProducts();
  }, []);

  const showMoreProducts = () => {
    const currentLength = visibleProducts.length;
    const moreProducts = relatedProducts.slice(currentLength, currentLength + 4); // Carrega mais 4 produtos
    setVisibleProducts([...visibleProducts, ...moreProducts]);
  };

  return (
    <div className="related-products">
      <h2>Related Products</h2>
      <div className="related-products-grid">
        {visibleProducts.map(product => (
          <div key={product.id} className="related-product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.imageUrl} alt={product.name} className="related-product-image" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="price">Rp {product.price.toLocaleString()}</span>
              {product.oldPrice && <span className="old-price">Rp {product.oldPrice.toLocaleString()}</span>}
              {product.discount && <span className="discount">{product.discount}</span>}
              {product.isNew && <span className="new-product">New</span>}
            </Link>
          </div>
        ))}
      </div>
      {visibleProducts.length < relatedProducts.length && (
        <button className="show-more" onClick={showMoreProducts}>
          Show More
        </button>
      )}
    </div>
  );
};

export default RelatedProducts;
