import './Header.css'
import { Button, Flex, ListItem, UnorderedList, Image, Icon } from "@chakra-ui/react";
import { IsMobile } from "../../../utils/IsMobile";
import ToggleColorButton from "../ToggleColorButton/ToggleColorButton";
import { useNavigate } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import logo from '../../assets/images/logo.svg'
import Sidebar from "../SideBar/SideBar";
import { FaRegUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Header() {
    const history = useNavigate()

    const renderHeader = () => {
        if (IsMobile())
            return (<>
                <Flex >
                    <ListItem cursor='pointer' onClick={() => history('/home')}><Image src={logo} w='12rem' /></ListItem>
                </Flex>
                <Flex gap='1rem' >
                    <ListItem><Button variant='link' fontSize='1.2rem' onClick={() => history('/home/')}>Home</Button></ListItem>
                    <ListItem><Button variant='link' fontSize='1.2rem' onClick={() => history('/home/shop/')}>Shop</Button></ListItem>
                    <ListItem><Button variant='link' fontSize='1.2rem' onClick={() => history('/about/')}>About</Button></ListItem>
                    <ListItem><Button variant='link' fontSize='1.2rem' onClick={() => history('/contact/')}>Contact</Button></ListItem>
                </Flex>

                <Flex justifyContent='space-between' alignItems='center' gap='2.5rem'>
                    <ListItem><FaRegUser className='headerSvg' /></ListItem>
                    <ListItem><IoSearchSharp className='headerSvg' /></ListItem>
                    <ListItem><FaRegHeart className='headerSvg' /></ListItem>
                    <ListItem><MdOutlineShoppingCart className='headerSvg' /></ListItem>
                </Flex>
            </>)
        else
            return (<>
                <Sidebar />
                <ListItem mr='1rem'><MdOutlineShoppingCart className='headerSvg' /></ListItem>
            </>)
    }
    return (
        <nav>
            <UnorderedList padding='1rem'>
                {renderHeader()}
            </UnorderedList>
        </nav>
    );
}
