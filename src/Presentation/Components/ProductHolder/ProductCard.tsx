import { useState } from 'react';
import { Product } from '../../../Domain/Model/Product';
import './ProductCard.css'
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import ButtonComponent from '../Inputs/ButtonComponent';
import { useNavigate } from 'react-router-dom';
import { IoMdShare } from "react-icons/io";
import { LuArrowLeftRight } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import formatCurrency from '../../../utils/FormatCurrency';
import { ProductModel } from '../../../main/hooks/useProductModel';
import { CategoryModel } from '../../../main/hooks/useCategoryModel';
import TruncatedText from '../Inputs/TruncatedText';

interface ProductCardInterface {
    product: Product;
    isList: boolean;
}

export default function ProductCard({ product, isList }: ProductCardInterface) {
    const [isHover, setIsHover] = useState(false)
    const { onChangeValue } = ProductModel()
    const { onChangeValue: onChangeValueCategory } = CategoryModel()
    const history = useNavigate()
    const goToProductPage = () => {
        onChangeValue(product.id)
        onChangeValueCategory(product.category_id)
        history(`/home/shop/${product.name.split(' ').join('-').toLocaleLowerCase()}`)
    }
    const goToShopCategory = () => {
        onChangeValueCategory(product.category.id)
        history(`/home/shop`)
    }
    return (
        <Flex direction={isList ? 'row' : 'column'} textAlign='left' w={isList ? '100%' : '18rem'} className='product-card' position='relative'
            onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            {product.discount_percent > 0 && <Box className='stamp discount' >-{Number(product.discount_percent).toFixed(0)}%</Box>}
            {product.is_new && <Box className='stamp is-new' >New!</Box>}
            <Image w={isList ? 'auto' : '100%'} height='19rem' src={product.attributes[0].image_link} />


            <Box padding='1rem 0 2rem 1rem' gap='0.5rem' overflow='hidden'>
                <Text cursor='pointer' fontSize='1.5rem' fontWeight='bold'>{product.name}</Text>
                <Text cursor='pointer' onClick={() => goToShopCategory()} className='text-secundary' fontSize='1rem' fontWeight='medium'>{product.category.name}</Text>
                {product.discount_percent > 0 ?
                    <Flex gap='1rem'>
                        <Text fontSize='1.25rem' fontWeight='bold'>{formatCurrency(product.discount_price)}</Text>
                        <Text fontSize='1.25rem' fontWeight='bold' color='#B0B0B0' textDecoration='line-through'>{formatCurrency(product.price)}</Text>
                    </Flex>
                    :
                    <Text fontSize='1.25rem' fontWeight='bold'>{formatCurrency(product.price)}</Text>
                }

                {isList && <>
                    <Text className='text-secundary' mt='1rem' >Descrição</Text>
                    <Text id='list-description' fontSize='1.25rem'  >{product.description}</Text>
                </>}

            </Box>

            {isHover && (
                <Flex direction='column' justifyContent='center' alignItems='center'
                    className='overlay' width='100%' height='100%' position='absolute' top='0' left='0' >
                    <ButtonComponent width='70%' full={false} labelName='See Details' onClick={() => goToProductPage()} />
                    <Flex color='white' mt='1.5rem' gap='1.25rem'>
                        <Flex alignItems='center' gap='0.1rem' cursor='pointer'>
                            <IoMdShare size='1rem' />
                            <Text fontWeight='bold' fontSize='1rem'>
                                Share
                            </Text>
                        </Flex>

                        <Flex alignItems='center' gap='0.1rem' cursor='pointer'>
                            <LuArrowLeftRight size='1rem' style={{ transform: 'scaleX(-1)' }} />
                            <Text fontWeight='bold' fontSize='1rem'>
                                Compare
                            </Text>
                        </Flex>

                        <Flex alignItems='center' gap='0.1rem' cursor='pointer'>
                            <FaRegHeart size='1rem' />
                            <Text fontWeight='bold' fontSize='1rem'>
                                Like
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>

            )}

        </Flex>
    );
}
