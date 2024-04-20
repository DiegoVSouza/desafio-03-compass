import './ProductView.css'
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { FiEdit2 } from "react-icons/fi";
import { Product } from '../../../Domain/Model/Product';
import ProductModel from '../../../main/models/ProductModel';
import TittleBox from '../../Components/TittleBox/TittleBox';
import ProductComponent from '../../Components/ProductComponent/ProductComponent';
import { productsMockUp } from '../../Components/ProductHolder/mockedValues';
import ProductHolder from '../../Components/ProductHolder/ProductHolder';
interface ProductComponentInterface {
  product: Product
}

export default function ProductView() {
  const { Product } = ProductModel()
  let ProductMockUp = productsMockUp[1]
  return (
    <main>
      <TittleBox isProduct={true}/>
      {ProductMockUp && <ProductComponent product={ProductMockUp}/>}
      <ProductHolder limit={4} categoryId={Product?.category.id} pagination={false} title='Related Products'/>
      <Box mb='4rem'></Box>
    </main>
  );
}
