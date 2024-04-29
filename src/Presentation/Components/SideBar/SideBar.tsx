import {
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    IconButton,
    useDisclosure,
    Image,
    Flex,
} from '@chakra-ui/react';
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import ToggleColorButton from '../ToggleColorButton/ToggleColorButton';
import logo from './public/assets/images/logo.svg'
import { CategoryModel } from '../../../main/hooks/useCategoryModel';

const Sidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const history = useNavigate()
    const goTo = (url: string) => {
        history(url)
        onClose()
    }
    const { onChangeValue } = CategoryModel()
    const goToStore = () => {
        onChangeValue(undefined)
        history('/home/shop/')
    }
    return (
        <>
            <IconButton
                aria-label="Open Menu"
                icon={<RxHamburgerMenu />}
                onClick={onOpen}
                variant="outline"
            />
            <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Image src={logo} w='8rem' />
                    </DrawerHeader>
                    <DrawerBody height='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='space-between'>
                        <Flex w='100%' direction='column' gap='1rem' >
                            <Button variant='ghost' w="full" onClick={() => goTo('/home/')}>Home</Button>
                            <Button variant='ghost' w="full" onClick={() => goToStore()}>Shop</Button>
                            <Button variant='ghost' w="full" onClick={() => goTo('/about/')}>About</Button>
                            <Button variant='ghost' w="full" onClick={() => goTo('/contact/')}>Contact</Button>
                        </Flex>

                        <ToggleColorButton />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Sidebar;
