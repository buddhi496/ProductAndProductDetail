import React from 'react';
import { useParams } from 'react-router-dom';
import products from './ProductList'

function ProductDetail() {
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