import React from 'react';
import { useParams } from 'react-router-dom';
import products from './ProductList'

function ProductDetail() {
    const index  = useParams();
    const {number} = index;
    // const product = products(index);
    // console.log(index);

    console.log(products);
    console.log(number);
    console.log(products(index));


  return (
    <div>
      <h1>Product detail {number}</h1>
      {/* <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.details}</p>
      <button onClick={() => alert('Added to cart')}>Add to Cart</button> */}
    </div>
  );
}

export default ProductDetail;