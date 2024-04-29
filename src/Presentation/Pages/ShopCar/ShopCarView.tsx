import './ShopCarView.css'
import { Box, Flex, Text, Image, Button, Input } from "@chakra-ui/react";
import TittleBox from '../../Components/TittleBox/TittleBox';
import formatCurrency from '../../../utils/FormatCurrency';
import { upperCaseFirstLetter } from '../../../utils/TextUltis';
import AddShopCar from '../../Components/ShopCarComponents/AddShopCar';
import { useEffect } from 'react';
import { useShopCar } from '../../../main/hooks/useShopCar';
import { LiaSadTear } from "react-icons/lia";
import ButtonComponent from '../../Components/Inputs/ButtonComponent';

export default function ShopCarView() {
  const { ShopCar } = useShopCar()

  const realizeTheSumSubTotalNoDiscount = () => {
    let total = 0;
    if (ShopCar?.products) {

      for (const product of ShopCar.products) {
        total += product.price * product.qtd;
      }

    }
    return total;
  }

  const realizeTheSumSubTotal = () => {
    let total = 0;
    if (ShopCar?.products) {

      for (const product of ShopCar.products) {
        if (product.discount_percent > 0) {
          total += product.discount_price * product.qtd;
        } else {
          total += product.price * product.qtd;
        }
      }

    }
    return total;
  }

  const totalDiscount = ()=>{
    let discount = 1 - (realizeTheSumSubTotal()/ realizeTheSumSubTotalNoDiscount())
    return discount.toFixed(2)
  }

  return (
    <main>
      <TittleBox />
      <Box as='section' padding={['1rem 1.5rem', '2rem 2rem', '2rem 3rem', '2rem 4rem', '4rem 6.25rem']}>
        {(ShopCar && ShopCar.products.length) ?
          <>
            {ShopCar.products.map(item => (
              <Flex className='shopcar-card' flexWrap='wrap' gap='1rem' alignItems='center' key={item.id} justifyContent={['center', 'center', 'space-between', 'space-between', 'space-between']} >
                <Flex alignItems='center' flexWrap='wrap' gap='1rem' justifyContent={['center', 'center', 'space-between', 'space-between', 'space-between']}>
                  <Image w='15rem' h='15rem' objectFit='cover' src={item.image_link} />
                  <Box ml={['0', '0', '2rem', '5.25rem', '5.25rem']} mt={['2rem', '2rem', '0', '0', '0']}>
                    <Text fontWeight='bold' fontSize='1rem' mb='2rem'>{upperCaseFirstLetter(item.name)}</Text>
                    <Text className='especifications' mb='1rem'>{item.size.toUpperCase()}</Text>
                    <Text className='especifications' mb='1rem'>{upperCaseFirstLetter(item.color)}</Text>
                    {item.discount_percent > 0 ?
                      <Flex gap='1rem'>
                        <Text ml='1rem' color='black' fontWeight='500' fontSize='1.2rem'>{formatCurrency(item.discount_price)}</Text>
                        <Text className='text-secundary' fontSize='1.2rem' color='#3b2d2d' textDecoration='line-through'>{formatCurrency(item.price)}</Text>
                      </Flex>
                      :
                      <Text ml='1rem' className='text-secundary' fontWeight='500' fontSize='1.2rem'>{formatCurrency(item.price)}</Text>
                    }
                  </Box>
                </Flex>
                <Box mt={['2rem', '2rem', '0', '0', '0']}>
                  <AddShopCar key={item.id} id={item.id} color={item.color} size={item.size} compact={true} qtd={item.qtd} />
                </Box>
              </Flex>
            ))}
            <Flex w='100%' alignItems={['center', 'center', 'flex-end', 'flex-end', 'flex-end']} direction='column'>
              <Flex alignItems='center' mb='1rem' direction={['column', 'column', 'row', 'row', 'row']}>
                <Text ml='1rem' className='text-secundary' color='black' fontSize='1rem'>Valor sem desconto:</Text>
                <Text ml='0.2rem' color='black' fontWeight='500' fontSize='1.2rem'>{formatCurrency(realizeTheSumSubTotalNoDiscount())}</Text>
                <Text ml='1rem' className='text-secundary' color='black' fontSize='1rem'>Valor com desconto:</Text>
                <Text ml='0.2rem'color='black' fontWeight='500' fontSize='1.2rem'>{formatCurrency(realizeTheSumSubTotal())}</Text>
                <Text ml='1rem' className='text-secundary' color='black' fontSize='1rem'>Desconto de:</Text>
                <Text ml='0.2rem' color='black' fontWeight='500' fontSize='1.2rem'>{totalDiscount()}%</Text>
              </Flex>
              <ButtonComponent width='10rem' full={true} labelName='Realizar Checkout' />
            </Flex>
          </>

          :
          <Flex justifyContent='center' alignItems='center' w='100%' h='100%' direction='column'>
            <Flex>
              <Text fontSize={['1.5rem', '1.5rem', '1.5rem', '2rem', '2rem']} fontWeight='medium'> Seu carrinho está vazio </Text> <LiaSadTear size='3rem' />
            </Flex>
          </Flex>

        }

      </Box>
    </main>
  );
}
