import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './Dashboard.css';
import Features from './Features';
import { addItem } from '../features/cart/cartSlice'; // Correctly import the addItem action
import { Link } from 'react-router-dom';


const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showCount, setShowCount] = useState(16);
  const [sortOption, setSortOption] = useState('Default');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('Token');
        const response = await axios.get('http://localhost:4000/products', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setProducts(response.data);
        setFilteredProducts(response.data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let updatedProducts = [...products];

    if (sortOption === 'Price') {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'Name') {
      updatedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    const indexOfLastProduct = currentPage * showCount;
    const indexOfFirstProduct = indexOfLastProduct - showCount;
    const currentProducts = updatedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    setFilteredProducts(currentProducts);
  }, [products, showCount, sortOption, currentPage]);

  const handleShowChange = (event) => {
    setShowCount(parseInt(event.target.value, 10));
    setCurrentPage(1); 
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product)); // Dispatch the correct addItem action
  };

  return (
    <div className="dashboard">
      <div className="filter-bar">
        {/* Filter bar code */}
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
             <Link to={`/product/${product.id}`} className="product-link">
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="price">Rp {product.price.toLocaleString()}</span>
            </Link>
            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to cart</button>
            <div className="social-actions">
              <span>Share</span>
              <span>Compare</span>
              <span>Like</span>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {[...Array(Math.ceil(products.length / showCount)).keys()].map((pageNumber) => (
          <button
            key={pageNumber + 1}
            onClick={() => handlePageChange(pageNumber + 1)}
            className={currentPage === pageNumber + 1 ? 'active' : ''}
          >
            {pageNumber + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
