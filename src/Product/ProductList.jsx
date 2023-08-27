import React from 'react';
import './ProductList.css';
import {Link} from 'react-router-dom';

function ProductList() {
  var products = [
    {
      id: '1',
      name: 'Product 1',
      price: 19.99,
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: '2',
      name: 'Product 2',
      price: 29.99,
      details: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
      id: '3',
      name: 'Product 3',
      price: 39.99,
      details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ul className="product-list">
        {products.map((product, index) => (
          <li key={index} className="product-item">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">Price: ${product.price}</p>
            <p>{product.details}</p>
            <Link to={`/productdetail/${index}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;