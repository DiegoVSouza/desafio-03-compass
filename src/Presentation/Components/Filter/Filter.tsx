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
import { ProductModel } from "../../../main/hooks/useProductModel";
import { BsSliders, BsViewList } from "react-icons/bs";
import { HiViewGrid } from "react-icons/hi";
import { CategoryModel } from "../../../main/hooks/useCategoryModel";
import ButtonComponent from "../Inputs/ButtonComponent";
import './Filter.css';

interface FilterInterface {
    setActualCategoryId: React.Dispatch<React.SetStateAction<string | undefined>>;
    actualCategoryId: string | undefined;
    saveFilter: () => void;
    withDiscount: boolean | undefined;
    isNew: boolean | undefined;
    handleSetWithDiscount: () => void;
    handleSetIsNew: () => void;
    showQuantPag: number;
    setShowQuantPag: React.Dispatch<React.SetStateAction<number>>;
    sortedBy: string;
    setSortedBy: React.Dispatch<React.SetStateAction<string>>;
    isList: boolean;
    setIsList: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Filter({isList, setIsList, setActualCategoryId, actualCategoryId, saveFilter, withDiscount,
    isNew, handleSetWithDiscount, handleSetIsNew,showQuantPag, setShowQuantPag, sortedBy, setSortedBy }: FilterInterface) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { Categorys } = CategoryModel()
    const { Products, ProductsPag } = ProductModel()

    return (
        <Flex id="filter-menu" padding={['1rem 2rem', '1rem 2rem', '1rem 3rem', '1.5rem 6.25rem', '1.5rem 6.25rem']} flexWrap='wrap' alignItems='center' justifyContent='space-between'>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Filtro</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text mb='1rem'>
                            Select category
                        </Text>
                        <Select cursor='pointer' value={actualCategoryId} onChange={(e) => setActualCategoryId(e.target.value)}>
                            <option value={''}>Todos as categorias</option>
                            {Categorys.length && Categorys.map(item => (
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
            <Flex id='icon-holder' gap={['2rem', '2rem', '2rem', '0.75rem', '0.75rem']} flexWrap='wrap' alignItems='center'>
                <Flex onClick={onOpen} gap='0.75rem' alignItems='center' >
                    <BsSliders size='1.5rem' style={{ transform: 'scaleX(-1)' }} />
                    <Text fontSize='1.25rem' >Filter</Text>
                </Flex>
                <HiViewGrid size='1.5rem' className={isList ? '' : 'active-hover'} onClick={()=>setIsList(false)} />
                <BsViewList size='1.5rem' className={isList ? 'active-hover' : ''} onClick={()=>setIsList(true)} />
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
    )
}
