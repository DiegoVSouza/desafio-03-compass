import { Box, Flex, Text } from "@chakra-ui/react";
import ProductModel from '../../../main/hooks/ProductModel';
import { useEffect, useState } from 'react';
import productsMockUp from './mockedValues';
import ProductCard from './ProductCard';
import LoadingSpinner from "../Notification/LoadingSpinner";
import ButtonComponent from "../Inputs/ButtonComponent";
interface ProductHolderInterface {
  title?: string;
  name?: string;
  categoryId?: string;
  price?: number;
  pagination: boolean;
  limit: number;
}

export default function ProductHolder({ title, name, categoryId, price, pagination = false, limit = 8 }: ProductHolderInterface) {
  const [showQuant, setShowQuant] = useState(limit)
  const [isLoading, setIsLoading] = useState(true)

  const { getProducts, Products } = ProductModel()

  useEffect(() => {
    getProducts({ name, categoryId, price, limit }).then(() => {
      setIsLoading(false)
    })
  }, [])



  return (
    <Box as='section' textAlign='center' >
      {isLoading ? <LoadingSpinner /> :
        <Box>
          <Text fontSize='2.5rem' mb='2rem' fontWeight='bold' >{title}</Text>
          <Flex mb='2rem' flexWrap='wrap' justifyContent='center' padding={['0 1.5rem', '0 2rem', '0 3rem', '0 4rem', '0 6.3rem']}  gap='2rem'>
            {productsMockUp.slice(0, limit).map(item => (
              <ProductCard key={item.id} product={item} />
            ))}
          </Flex>

          <ButtonComponent full={true} width='16rem' labelName="Show More"/>
        </Box>

      }

    </Box>
  );
}
