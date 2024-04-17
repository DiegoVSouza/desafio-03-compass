import { Box, Flex, Input, Select, Text } from "@chakra-ui/react";
import ProductModel from '../../../main/hooks/ProductModel';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import LoadingSpinner from "../Notification/LoadingSpinner";
import ButtonComponent from "../Inputs/ButtonComponent";
import Pagination from "../Inputs/Pagination";
import { productsMockUp, productsMockUpPag } from "./mockedValues";
import { BsSliders } from "react-icons/bs";
import { HiViewGrid } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";
import './ProductHolder.css'

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
  const [showQuantPag, setShowQuantPag] = useState(16)
  const [sortedBy, setSortedBy] = useState('name')
  const [isLoading, setIsLoading] = useState(true)
  const [actualPage, setActualPage] = useState(1)

  const { getProducts, Products, getProductsPag, ProductsPag } = ProductModel()

  useEffect(() => {
    if (pagination) {
      getProductsPag({ name, categoryId, price, limit: showQuantPag, page: actualPage, sorted_by: sortedBy}).then(() => {
        setIsLoading(false)
      })
    } else {
      getProducts({ name, categoryId, price, limit: 24 }).then(() => {
        setIsLoading(false)
      })
    }
  }, [])

  const showMore = () => {
    let newLimit = showQuant + limit
    setShowQuant(newLimit)
  }

  const goToPage = (page: number) => {
    setIsLoading(true)
    getProducts({ name, categoryId, price, limit: showQuantPag, page: page }).then(() => {
      setIsLoading(false)
    })
    setActualPage(page)
  }

  useEffect(()=>{
    getProductsPag({ name, categoryId, price, limit: showQuantPag, page: actualPage, sorted_by: sortedBy })
  },[showQuantPag,sortedBy])

  return (
    <Box as='section' textAlign='center' >
      {isLoading ? <LoadingSpinner /> :

        <Box>
          {
            pagination ?
              <>
                <Flex id="filter-menu" padding='1.5rem 6.3rem' alignItems='center' justifyContent='space-between'>
                  <Flex className='icon-holder' gap='0.75rem' alignItems='center'>
                    <BsSliders size='1.5rem' style={{ transform: 'scaleX(-1)' }} />
                    <Text fontSize='1.25rem'>Filter</Text>
                    <HiViewGrid size='1.5rem' />
                    <BsViewList size='1.5rem' />
                    <Text id="number-resume" fontSize='1rem' ml='2rem' fontWeight='400'>
                      Showing {productsMockUpPag.page} of {productsMockUpPag.number_of_pages} pages
                    </Text>
                  </Flex>
                  <Flex alignItems='center' gap='1rem'>
                    <Text fontSize='1.25rem' fontWeight='400'>
                      Show
                    </Text>
                    <Input w='3.5rem' h='3.5rem' background='white' value={showQuantPag} onChange={(e) => setShowQuantPag(+e.target.value)} />
                    <Text fontSize='1.25rem' fontWeight='400'>
                    Sorted by
                    </Text>
                    <Select w='10rem' h='3.5rem' background='white' value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
                      <option value={'name'}>Name</option>
                      <option value={'price'}>Price</option>
                    </Select>
                  </Flex>
                </Flex>
                <Box>
                  <Text fontSize='2.5rem' mb='2rem' fontWeight='bold' >{title}</Text>
                  <Flex mb='2rem' flexWrap='wrap' justifyContent='center' padding={['0 1.5rem', '0 2rem', '0 3rem', '0 4rem', '0 6.3rem']} gap='2rem'>
                    {productsMockUpPag.products.map(item => (
                      <ProductCard key={item.id} product={item} />
                    ))}
                  </Flex>
                  <Pagination actualPage={productsMockUpPag.page} numberOfpages={productsMockUpPag.number_of_pages} onClick={goToPage} />
                </Box>
              </>

              :
              <Box>
                <Text fontSize='2.5rem' mb='2rem' fontWeight='bold' >{title}</Text>
                <Flex mb='2rem' flexWrap='wrap' justifyContent='center' padding={['0 1.5rem', '0 2rem', '0 3rem', '0 4rem', '0 6.3rem']} gap='2rem'>
                  {productsMockUp.slice(0, showQuant).map(item => (
                    <ProductCard key={item.id} product={item} />
                  ))}
                </Flex>
                {showQuant < (limit * 3) && <ButtonComponent full={true} width='16rem' labelName="Show More" onClick={() => showMore()} />}
              </Box>
          }
        </Box>

      }
    </Box>
  );
}
