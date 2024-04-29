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
import Filter from "../Filter/Filter";

interface ProductHolderInterface {
  title?: string;
  name?: string;
  price?: number;
  categoryId?: string;
  goDirectForShop?: boolean;
  discount?: boolean;
  isnew?: boolean;
  pagination: boolean;
  limit: number;
}

export default function ProductHolder({ title, name, price, categoryId, discount = undefined, isnew = undefined, goDirectForShop = false, pagination = false, limit = 8 }: ProductHolderInterface) {
  const { Categorys, getCategorys, onChangeValue } = CategoryModel()
  const { Products, getProductsPag, ProductsPag } = ProductModel()

  const [showQuant, setShowQuant] = useState(limit)
  const [showQuantPag, setShowQuantPag] = useState(16)
  const [sortedBy, setSortedBy] = useState('asc')
  const [isLoading, setIsLoading] = useState(true)
  const [actualPage, setActualPage] = useState(1)
  const [actualCategoryId, setActualCategoryId] = useState(categoryId)
  const [withDiscount, setWithDiscount] = useState(discount)
  const [isNew, setIsNew] = useState(isnew)
  const [isList, setIsList] = useState(false)

  const history = useNavigate()

  const currentNew = () => {
    if (isnew) {
      return isNew ? isNew : undefined
    } else {
      if (isNew) {
        return isNew
      } else {
        return isnew
      }
    }
  }

  const currentDiscount = () => {
    if (discount) {
      return withDiscount ? withDiscount : undefined
    } else {
      if (withDiscount) {
        return withDiscount
      } else {
        return discount
      }
    }
  }

  const handleGetProductPag = (key?: string, value?: string | number | boolean | undefined) => {
    let params: ProductGet = {
      name, category_id: actualCategoryId,
      price, limit: showQuantPag,
      page: actualPage, sorted_by: sortedBy,
      discount: currentDiscount(),
      is_new: currentNew()
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
      getProductsPag({ name, category_id: categoryId, price, limit: limit * 2, discount: currentDiscount(), is_new: currentNew() }).then(() => {
        setIsLoading(false)
      })
    }
    if (Categorys.length < 1)
      getCategorys()
  }, [])

  useEffect(() => {
    let params: ProductGet = {
      name, category_id: actualCategoryId,
      price, limit: showQuantPag,
      page: actualPage, sorted_by: sortedBy,
      discount: currentDiscount(),
      is_new: currentNew()
    }
    getProductsPag(params).then(() => {
      setIsLoading(false)
    })
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
    if (actualCategoryId === '') {
      onChangeValue(undefined)
      handleGetProductPag('category_id', undefined)
    } else {
      onChangeValue(actualCategoryId)
      handleGetProductPag()
    }
  }

  const handleSetWithDiscount = () => {
    setWithDiscount(!withDiscount);
  };

  const handleSetIsNew = () => {
    setIsNew(!isNew);
  };

  return (
    <Box as='section' textAlign='center' >

      {isLoading ? <LoadingSpinner /> :

        <Box>
          {
            pagination ?
              <>
                <Filter isList={isList} setIsList={setIsList} actualCategoryId={actualCategoryId} handleSetIsNew={handleSetIsNew} handleSetWithDiscount={handleSetWithDiscount}
                  isNew={isNew} saveFilter={saveFilter} setActualCategoryId={setActualCategoryId}
                  setShowQuantPag={setShowQuantPag}
                  setSortedBy={setSortedBy} showQuantPag={showQuantPag} sortedBy={sortedBy} withDiscount={withDiscount} />

                <Box>
                  <Text fontSize='2.5rem' mb='2rem' fontWeight='bold' >{title}</Text>
                  <Flex mb='2rem' flexWrap={isList ? 'nowrap' : 'wrap'} direction={isList ? 'column' : 'row'} justifyContent='center' padding={['0 1.5rem', '0 2rem', '0 3rem', '0 4rem', '0 6.25rem']} gap='2rem'>
                      {Products && Products.map(item => (
                        <ProductCard isList={isList} key={item.id} product={item} />
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
                    <ProductCard isList={false} key={item.id} product={item} />
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
