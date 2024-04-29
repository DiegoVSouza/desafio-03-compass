import './ProductView.css'
import { Box } from "@chakra-ui/react";
import TittleBox from '../../Components/TittleBox/TittleBox';
import ProductComponent from '../../Components/ProductComponent/ProductComponent';
import ProductHolder from '../../Components/ProductHolder/ProductHolder';
import { ProductModel } from '../../../main/hooks/useProductModel';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../../Components/Notification/LoadingSpinner';

export default function ProductView() {
  const { Product } = ProductModel()
 
  return (
    <main>
      <TittleBox isProduct={true} />
      {Product && <ProductComponent product={Product} />}
      <ProductHolder categoryId={Product?.category_id} limit={4} pagination={false} title='Related Products' />
      <Box mb='4rem'></Box>
    </main>
  );
}
