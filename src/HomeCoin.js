import React from 'react';
import './Coin.css';

const HomeCoin = ({
  name,
  price,
  symbol,
  image,
}) => {
  return (
    <div className='coin-container'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
          <p className='coin-price'>${price}</p>
        </div>
    </div>
  );
};

export default HomeCoin;
