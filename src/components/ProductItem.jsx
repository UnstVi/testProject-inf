import React from 'react'
import { useDispatch } from 'react-redux';
import style from './ProductItem.module.css';
import { deleteProduct } from '../store/products/asyncActions';

const ProductItem = ({size, imageUrl, name, count, weight, product}) => {
    const dispatch = useDispatch();

  return (
    <div className={style.ProductItem}>
        <h2>{name}</h2>
        <h3>На складі є {count} шт</h3>
        <h4>Висота: {size.height}</h4>
        <h4>Ширина: {size.width}</h4>
        <h4>Вага: {weight}</h4>
        <img src={imageUrl} alt="image" />
        <button onClick={()=> dispatch(deleteProduct(product))}>Remove</button>
    </div>
  )
}

export default ProductItem