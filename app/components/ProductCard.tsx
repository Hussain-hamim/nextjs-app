import React from 'react';
import AddToCart from './AddToCart';

const ProductCard = () => {
  return (
    <div className='btn btn-secondary hover:bg-rose-400'>
      <div>ProductCard</div>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
