import {
  Box, Flex, Input, Select, Text, useDisclosure, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  InputGroup,
  Checkbox
} from "@chakra-ui/react";

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
import { CategorysMockUp } from "../CategoryHolder/mockedValues";
import { ProductGet } from "../../../Domain/Model/Product";
import { useNavigate } from "react-router-dom";
import { CategoryModel } from "../../../main/hooks/useCategoryModel";
import { ProductModel } from "../../../main/hooks/useProductModel";

interface ProductHolderInterface {
  title?: string;
  name?: string;
  categoryId?: string;
  price?: number;
  goDirectForShop?: boolean;
  discount?: boolean;
  isnew?: boolean;
  pagination: boolean;
  limit: number;
}

export default function ProductHolder({ title, name, price, categoryId, discount = false, isnew = undefined, goDirectForShop = false, pagination = false, limit = 8 }: ProductHolderInterface) {
  const [showQuant, setShowQuant] = useState(limit)
  const [showQuantPag, setShowQuantPag] = useState(16)
  const [sortedBy, setSortedBy] = useState('asc')
  const [isLoading, setIsLoading] = useState(true)
  const [actualPage, setActualPage] = useState(1)
  const [actualCategoryId, setActualCategoryId] = useState(categoryId)
  const [waitCategoryId, setWaitCategoryId] = useState(categoryId)
  const [withDiscount, setWithDiscount] = useState(discount)
  const [isNew, setIsNew] = useState(isnew)

  const history = useNavigate()

  const { Categorys, getCategorys, onChangeValue } = CategoryModel()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { Products, getProductsPag, ProductsPag } = ProductModel()

  const handleGetProductPag = (key?: string, value?: string | number | boolean | undefined) => {
    let params: ProductGet = {
      name, category_id: actualCategoryId,
      price, limit: showQuantPag,
      page: actualPage, sorted_by: sortedBy,
      discount: withDiscount ? true : undefined,
      is_new: isNew
    }

    if (key)
      params[key] = value

    setIsLoading(true)
    getProductsPag(params).then(() => {
      setIsLoading(false)
    })
  }

  useEffect(() => {
    if (pagination) {
      handleGetProductPag()
    } else {
      getProductsPag({ name, category_id: categoryId, price, limit: limit * 2, discount: withDiscount ? true : undefined, is_new: isNew }).then(() => {
        setIsLoading(false)
      })
    }
    if (!Categorys)
      getCategorys()
  }, [])

  let wait = true

  useEffect(() => {
    getProductsPag({ name, category_id: categoryId, actualCategoryId, price, limit: showQuantPag, page: actualPage, sorted_by: sortedBy, discount: withDiscount ? true : undefined, is_new: isNew })
  }, [showQuantPag, sortedBy])


  const showMore = () => {
    if (goDirectForShop) {
      history('/home/shop')
    }
    if (showQuant >= (limit * 2)) {
      onChangeValue(actualCategoryId)
      history('/home/shop')
    }
    let newLimit = showQuant + limit
    setShowQuant(newLimit)
  }

  const goToPage = (page: number) => {
    handleGetProductPag('page', page)
    setActualPage(page)
  }

  const saveFilter = () => {
    setActualCategoryId(waitCategoryId)
    handleGetProductPag('category_id', waitCategoryId)
    onClose()
  }

  const handleSetWithDiscount = () => {
    setWithDiscount(!withDiscount);
  };

  const handleSetIsNew = () => {
    setIsNew(!isNew);
  };

  return (
    <Box as='section' textAlign='center' >
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filtro</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb='1rem'>
              Select category
            </Text>
            <Select cursor='pointer' value={waitCategoryId} onChange={(e) => setWaitCategoryId(e.target.value)}>
              <option value={undefined}>Todos as categorias</option>
              {Categorys.map(item => (
                <option value={item.id}>{item.name}</option>
              ))}
            </Select>

            <Checkbox mt='1rem' w='100%' isChecked={withDiscount} onChange={handleSetWithDiscount} >Only with discount?</Checkbox>
            <Checkbox mt='1rem' w='100%' isChecked={isNew} onChange={handleSetIsNew} >Only new products?</Checkbox>
          </ModalBody>

          <ModalFooter gap='1rem'>
            <ButtonComponent width='40%' full={true} onClick={() => saveFilter()} labelName='Save' />
            <Button variant='ghost' height='3rem' onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {isLoading ? <LoadingSpinner /> :

        <Box>
          {
            pagination ?
              <>
                <Flex id="filter-menu" padding={['1rem 2rem', '1rem 2rem', '1rem 3rem', '1.5rem 6.25rem', '1.5rem 6.25rem']} flexWrap='wrap' alignItems='center' justifyContent='space-between'>
                  <Flex className='icon-holder' gap={['2rem', '2rem', '2rem', '0.75rem', '0.75rem']} flexWrap='wrap' alignItems='center'>
                    <Flex onClick={onOpen} gap='0.75rem' alignItems='center' id="filter">
                      <BsSliders size='1.5rem' style={{ transform: 'scaleX(-1)' }} />
                      <Text fontSize='1.25rem' >Filter</Text>
                    </Flex>
                    <HiViewGrid size='1.5rem' />
                    <BsViewList size='1.5rem' />
                    {actualCategoryId && <Text id="number-resume" fontSize='1rem' ml={['0', '0', '2rem', '2rem', '2rem']} fontWeight='400'>
                      Showing products of category {Categorys.find(item => item.id === actualCategoryId)?.name}
                    </Text>}
                    <Text id="number-resume" fontSize='1rem' ml={['0', '0', '2rem', '2rem', '2rem']} fontWeight='400'>
                      Showing {Products?.length || 0} of {ProductsPag.number_of_products} products
                    </Text>
                  </Flex>
                  <Flex alignItems='center' mt={['2rem', '2rem', '2rem', '2rem', '0']} gap='1rem'>
                    <Text fontSize='1.25rem' fontWeight='400'>
                      Show
                    </Text>
                    <Input w='3.5rem' h='3.5rem' background='white' value={showQuantPag} onChange={(e) => setShowQuantPag(+e.target.value)} />
                    <Text fontSize='1.25rem' fontWeight='400'>
                      Sorted by
                    </Text>
                    <Select w='10rem' h='3.5rem' background='white' value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
                      <option value={'asc'}>Crescente</option>
                      <option value={'dsc'}>Descrescente</option>
                    </Select>
                  </Flex>
                </Flex>
                <Box>
                  <Text fontSize='2.5rem' mb='2rem' fontWeight='bold' >{title}</Text>
                  <Flex mb='2rem' flexWrap='wrap' justifyContent='center' padding={['0 1.5rem', '0 2rem', '0 3rem', '0 4rem', '0 6.25rem']} gap='2rem'>
                    {Products && Products.map(item => (
                      <ProductCard key={item.id} product={item} />
                    ))}
                  </Flex>
                  <Pagination actualPage={actualPage} numberOfpages={ProductsPag.number_of_pages} onClick={goToPage} />
                </Box>
              </>

              :
              <Box>
                <Text fontSize='2.5rem' mb='2rem' fontWeight='bold' >{title}</Text>
                <Flex mb='2rem' flexWrap='wrap' justifyContent='center' padding={['0 1.5rem', '0 2rem', '0 3rem', '0 4rem', '0 6.25rem']} gap='2rem'>
                  {Products && Products.slice(0, showQuant).map(item => (
                    <ProductCard key={item.id} product={item} />
                  ))}
                </Flex>
                <ButtonComponent full={true} width='16rem' labelName="Show More" onClick={() => showMore()} />
              </Box>
          }
        </Box>

      }
    </Box>
  );
}
