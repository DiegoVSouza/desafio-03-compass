import './Header.css'
import {
    Button, Flex, ListItem, UnorderedList, Image, Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Portal,
    Box,
} from "@chakra-ui/react";
import { IsMobile } from "../../../utils/IsMobile";
import ToggleColorButton from "../ToggleColorButton/ToggleColorButton";
import { useNavigate } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import logo from './public./public/assets/imageslogo.svg'
import Sidebar from "../SideBar/SideBar";
import { FaRegUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CategoryModel } from '../../../main/hooks/useCategoryModel';
import { useShopCar } from '../../../main/hooks/useShopCar';

export default function Header() {
    const history = useNavigate()
    const { ShopCar } = useShopCar()
    const { onChangeValue } = CategoryModel()
    const goToStore = () => {
        onChangeValue(undefined)
        history('/home/shop/')
    }


    const renderHeader = () => {
        if (IsMobile())
            return (<>
                <Flex >
                    <ListItem cursor='pointer' onClick={() => history('/home')}><Image src={logo} w='12rem' /></ListItem>
                </Flex>
                <Flex gap='1rem' >
                    <ListItem><Button variant='link' fontSize='1.2rem' onClick={() => history('/home/')}>Home</Button></ListItem>
                    <ListItem><Button variant='link' fontSize='1.2rem' onClick={() => goToStore()}>Shop</Button></ListItem>
                    <ListItem><Button variant='link' fontSize='1.2rem' onClick={() => history('/about/')}>About</Button></ListItem>
                    <ListItem><Button variant='link' fontSize='1.2rem' onClick={() => history('/contact/')}>Contact</Button></ListItem>
                </Flex>

                <Flex justifyContent='space-between' alignItems='center' gap='2.5rem'>
                    <Popover
                        placement='bottom'
                    >
                        <PopoverTrigger>
                            <ListItem><FaRegUser className='headerSvg' /></ListItem>
                        </PopoverTrigger>
                        <PopoverContent className='popover' w='100%'>
                            <PopoverArrow />
                            <PopoverBody>
                                <Button variant='link' onClick={() => history('/register')}>Cadastre-se</Button>
                                <Button variant='link' onClick={() => history('/login')}>Login</Button>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <ListItem><IoSearchSharp className='headerSvg' /></ListItem>
                    <ListItem><FaRegHeart className='headerSvg' /></ListItem>
                    <ListItem onClick={() => history('/home/shop-car/')} position='relative'>
                        {ShopCar?.products.length > 0 && <Box id='shop-car-overlay' >{ShopCar.products.length}</Box>}
                        <MdOutlineShoppingCart className='headerSvg' />
                    </ListItem>
                </Flex>
            </>)
        else
            return (<>
                <Sidebar />
                <ListItem mr='1rem' onClick={() => history('/home/shop-car/')} position='relative'>
                    {ShopCar?.products.length > 0 && <Box id='shop-car-overlay' >{ShopCar.products.length}</Box>}
                    <MdOutlineShoppingCart className='headerSvg' />
                </ListItem>
            </>)
    }
    return (
        <nav>
            <UnorderedList id='header-ul' padding='1rem'>
                {renderHeader()}
            </UnorderedList>
        </nav>
    );
}
