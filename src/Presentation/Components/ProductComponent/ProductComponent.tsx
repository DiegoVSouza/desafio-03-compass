import './ProductComponent.css'
import { Box, Flex, Text, Image, Button, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { FiEdit2 } from "react-icons/fi";
import { Product } from '../../../Domain/Model/Product';
import { useEffect, useState } from 'react';
import formatCurrency from '../../../utils/FormatCurrency';
import { FaStar, FaStarHalf } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import AddShopCar from '../ShopCarComponents/AddShopCar';
import nlp from 'compromise'
interface ProductComponentInterface {
  product: Product
}

export default function ProductComponent({ product }: ProductComponentInterface) {
  const sizes = product.attributes.map(item => item.size)
  const colors = product.attributes.map(item => item.color)

  const [sizesArray, setSizesArray] = useState(sizes)
  const [colorsArray, setColorsArray] = useState(colors)
  const [featureImage, setFeatureImage] = useState(product.image_links[0])
  const [currentSize, setCurrentSize] = useState('')
  const [currentColor, setCurrentColor] = useState('')
  const [currentAttributeId, setCurrentAttributeId] = useState('')



  const handleSetCurrentSize = (size: string) => {
    if (size === currentSize) {
      setColorsArray(colors)
      setCurrentSize('')
    } else {
      let newAttributesArray = product.attributes.filter(item => item.size === size)
      let newColorArray = newAttributesArray.map(item => item.color)
      setColorsArray(newColorArray)
      setCurrentSize(size)
    }
  }

  const handlesetCurrentColor = (color: string) => {
    if (color === currentColor) {
      setSizesArray(sizes)
      setCurrentColor('')
    } else {
      let newAttributesArray = product.attributes.filter(item => item.color === color)
      let newSizeArray = newAttributesArray.map(item => item.size)
      setSizesArray(newSizeArray)
      setCurrentColor(color)
    }

  }

  useEffect(() => {
    if (currentColor && currentSize) {
      let newAttributeId = product.attributes.find(item => item.color === currentColor && item.size === currentSize)?.id
      if (newAttributeId)
        setCurrentAttributeId(newAttributeId)
    }else{
      setCurrentAttributeId('')
    }
  }, [currentColor, currentSize])

  function extractAdjectives(text: string): string[] {
    const doc = nlp(text);
    const adjectives = doc.adjectives().out('array');
    return adjectives;
  }


  let textForTags = [...product.description.split(' '), ...product.large_description.split(' '), ...product.name.split(' ')].join(' ')

  return (
    <Box id="product" as='section' mt='2rem' mb='5.6rem'>
      <Flex flexWrap='wrap' gap='3rem' padding={['0 1.5rem', '0 2rem', '0 3rem', '0 4rem', '0 6.25rem']} >
        <Flex borderRadius='10px'>
          <Flex direction='column' gap='2rem' mr='2rem'>
            {product.image_links.map((item, index) => (
              <Image borderRadius='10px' key={index} cursor='pointer' w={['4rem', '4rem', '5rem', '5rem', '5rem']} h={['4rem', '4rem', '5rem', '5rem', '5rem']}
                onClick={() => setFeatureImage(item)} src={item} />
            ))}
          </Flex>
          <Image borderRadius='10px' w={['20rem', '20rem', '30rem', '30rem', '30rem']} h={['20rem', '20rem', '30rem', '30rem', '30rem']} objectFit='contain' src={featureImage} />
        </Flex>
        <Box>
          <Text fontSize='2.6rem' fontWeight='400' >{product.name}</Text>
          {product.discount_percent > 0 ?
            <Flex gap='1rem'>
              <Text className='text-secundary' fontWeight='500' fontSize='1.5rem'>{formatCurrency(product.discount_price)}</Text>
              <Text className='text-secundary' fontSize='1.5rem' color='#3b2d2d' textDecoration='line-through'>{formatCurrency(product.price)}</Text>
            </Flex>
            :
            <Text className='text-secundary' fontWeight='500' fontSize='1.5rem'>{formatCurrency(product.price)}</Text>
          }
          <Flex id='comments' mt='1rem' gap='0.5rem' color='#FFC700'>
            <FaStar size={'1.25rem'} />
            <FaStar size={'1.25rem'} />
            <FaStar size={'1.25rem'} />
            <FaStar size={'1.25rem'} />
            <FaStarHalf size={'1.25rem'} />

            <Text>5 Customer Review</Text>
          </Flex>

          <Text fontWeight='400' size='13px' mt='1.1rem'>{product.description}</Text>
          <Text mt='1.4rem' className='text-secundary' fontSize='14px' fontWeight='400'>Size</Text>
          <Flex mt='12px' gap='1rem'>
            {sizesArray.map((item, index) => (
              <Button id="button-size" borderRadius='5px' className={currentSize === item ? 'active-size' : ''} value={currentSize}
                onClick={() => handleSetCurrentSize(item)} w='1.875rem' h='2.5rem' key={index} >
                {item.toUpperCase()}
              </Button>
            ))}
          </Flex>

          <Text mt='1.4rem' className='text-secundary' fontSize='14px' fontWeight='400'>Color</Text>
          <Flex mt='12px' gap='1rem'>
            {colorsArray.map((item, index) => (
              <Button borderRadius='2rem' w='1.875rem' h='2.5rem' border={item.toLowerCase() === 'white' ? 'solid 1px black' : 'none'} className={currentColor === item ? 'active-color' : ''} value={currentSize}
                onClick={() => handlesetCurrentColor(item)} key={index} backgroundColor={item.toLowerCase()}>
              </Button>
            ))}
          </Flex>
          <AddShopCar id={currentAttributeId} color={currentColor} size={currentSize} />
          <Box id='definitions' mt='3.75rem' pt='3.75rem' >
            <Flex>
              <Text w='5.5rem' className='text-secundary' fontSize='1rem'> SKU</Text>
              <Text className='text-secundary' fontSize='1rem' fontWeight='500'> : </Text>
              <Text className='text-secundary' fontSize='1rem' ml='12px' > {product.sku} </Text>
            </Flex>
            <Flex>
              <Text w='5.5rem' className='text-secundary' fontSize='1rem'> Category </Text>
              <Text className='text-secundary' fontSize='1rem' fontWeight='500'> : </Text>
              <Text className='text-secundary' fontSize='1rem' ml='12px' > {product.category.name} </Text>
            </Flex>
            <Flex>
              <Text w='5.5rem' className='text-secundary' fontSize='1rem'> Tags</Text>
              <Text className='text-secundary' fontSize='1rem' fontWeight='500'> : </Text>
              <Text className='text-secundary' fontSize='1rem' ml='12px' > {extractAdjectives(textForTags)} </Text>
            </Flex>
            <Flex>
              <Text w='5.5rem' className='text-secundary' fontSize='1rem'> Share</Text>
              <Text className='text-secundary' fontSize='1rem' fontWeight='500'> : </Text>
              <Flex ml='12px' alignItems='center' gap='1.5rem' className='icon-container'>
                <FaFacebook />
                <FaLinkedin />
                <AiFillTwitterCircle />
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>

      <Tabs id='tabs-product' variant='unstyled' w='100%'>
        <TabList w='100%' justifyContent='center'>
          <Tab _selected={{ fontWeight: 'Bold', color: 'black' }} fontSize='1.5rem'>Description</Tab>
          <Tab _selected={{ fontWeight: 'Bold', color: 'black' }} fontSize='1.5rem'>Additional Information</Tab>
        </TabList>
        <TabPanels padding={['0 0.2rem', '0 4rem', '0 5rem', '0 10rem', '0 13.25rem']}>
          <TabPanel>
            <Text>{product.description}</Text>
          </TabPanel>
          <TabPanel>
            <Text>{product.large_description}</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
