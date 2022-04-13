import React from 'react';
import styles from './ProductList.module.css';
import { fetchProducts } from '../store/products/asyncActions';
import { useDispatch, useSelector} from 'react-redux';
import ProductItem from './ProductItem';


const ProductList = () => {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.product.productList) || null;
  if(productList.length === 0){
    dispatch(fetchProducts()); 
  }



  return (

      
    <div className={styles.ProductList}>
    {productList.map(el => <ProductItem product={el} size={el.size} imageUrl={el.imageUrl} name={el.name} count={el.count} weight={el.weight}/>)}
    </div>
  )
}

export default ProductList