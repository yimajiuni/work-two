import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrums/Breadcrumbs';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId));
  return (
    <div>
      <Breadcrumbs product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product