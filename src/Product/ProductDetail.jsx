import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  var products = [
    {
      name: 'Product 1',
      price: 19.99,
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Product 2',
      price: 29.99,
      details: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
      name: 'Product 3',
      price: 39.99,
      details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
  
    const { productId } = useParams();
    const product = products[productId];

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.details}</p>
      <button onClick={() => alert('Added to cart')}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;