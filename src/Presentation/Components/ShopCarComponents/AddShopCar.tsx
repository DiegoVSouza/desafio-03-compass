import { Flex, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import './AddShopCar.css'
import { FiPlus } from "react-icons/fi";
import { IsMobile } from "../../../utils/IsMobile";
interface AddShopCarInterface {
}

export default function AddShopCar({ }: AddShopCarInterface) {
    const [quantity, setQuantity] = useState(1);

    

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <Flex id="add-shopcar" alignItems="center" mt='2rem'  justifyContent={['center', 'center', 'flex-start', 'flex-start', 'flex-start']} height='auto' gap='1.2rem' flexWrap='wrap'>
            <Flex id='quantity-button' height='100%' w='8rem'>
            <Button onClick={decrementQuantity} variant='ghost' fontSize='1rem' padding='1rem 1.5rem' height='100%' >
                -
            </Button>
                <Input
                    border='none'
                    value={quantity}
                    variant='unstyled'
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    textAlign="center"
                />
            <Button onClick={incrementQuantity} variant='ghost' fontSize='1rem' padding='1rem 1.5rem' height='100%'>
                +
            </Button>
            </Flex>
            
            <Button className='add-button' height='100%' borderColor='black'fontSize='1.25rem' fontWeight='400' color='black'>
            Add To Cart
            </Button>
            <Button className='add-button' height='100%' gap='5px' borderColor='black'fontSize='1.25rem' fontWeight='400' color='black'>
            <FiPlus width='1.4rem' height='1.4rem' />Compare
            </Button>
        </Flex>
    );
}
