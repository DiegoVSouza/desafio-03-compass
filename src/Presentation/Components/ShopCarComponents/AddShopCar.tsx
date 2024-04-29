import { Flex, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import './AddShopCar.css'
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Notification from "../Notification/Notification";
import { productsMockUp } from "../ProductHolder/mockedValues";
import { FiTrash } from "react-icons/fi";
import { useShopCar } from "../../../main/hooks/useShopCar";
import { ProductModel } from "../../../main/hooks/useProductModel";

interface AddShopCarInterface {
    id: string;
    color: string;
    size: string;
    compact?: boolean;
    qtd?: number;
}

export default function AddShopCar({ id, color, size, qtd = 1, compact = false }: AddShopCarInterface) {
    const [quantity, setQuantity] = useState(qtd);
    const { onAddProduct, onChangeShopCarProduct, onRemoveProduct } = useShopCar()
    const { Product }= ProductModel()
    const history = useNavigate()

    const currentQtd = Product?.attributes.find(item => item.id === id)?.qtd || 0

    const handleAddProduct = async () => {
        if (Product) {
            let newProduct = {
                id,
                product_id: Product.id,
                image_link: Product.attributes[0].image_link,
                color,
                size,
                qtd: quantity,
                name: Product.name,
                price: Product.price,
                discount_price: Product.discount_price,
                discount_percent: Product.discount_percent
            }
            onAddProduct(newProduct)
            if (await Notification.confirm("Deseja continuar comprando?", "Produto adicionado ao carrinho", 'Ir para o carrinho',
                'Sim', 'gray', 'orange', "success")) {
                history('/home/shop-car')
            }
        }

    }

    const handleSetQuantity = (quantity: number) => {
        if (currentQtd) {
            if (quantity > currentQtd)
                setQuantity(currentQtd)
            else
                setQuantity(quantity)
        }
    }


    const decrementQuantity = () => {
        let newQuantity = quantity - 1
        if (newQuantity < 1) {
            onRemoveProduct(id)
        }
        if (quantity > 1) {
            if (compact)
                onChangeShopCarProduct(id, newQuantity)

            setQuantity(newQuantity);

        }
    };

    const incrementQuantity = () => {
        if (currentQtd) {
            if (quantity < currentQtd) {
                let newQuantity = quantity + 1
                if (compact)
                    onChangeShopCarProduct(id, newQuantity)

                setQuantity(newQuantity);
            }
        }
    };

    useEffect(()=>{
        setQuantity(1)
    },[id])

    return (
        <>
            {compact ?
                <Flex id='quantity-button' height='100%' w='8rem'>
                    <Button onClick={decrementQuantity} variant='ghost' fontSize='1rem' padding={quantity === 1 ? '0.5rem 1rem' :'1rem 1.5rem'} height='100%' >
                    {quantity === 1 ? <FiTrash size='5rem'/> :'-'}
                    </Button>
                    <Input
                        border='none'
                        value={quantity}
                        variant='unstyled'
                        onChange={(e) => handleSetQuantity(parseInt(e.target.value) || 1)}
                        textAlign="center"
                    />
                    <Button onClick={incrementQuantity} variant='ghost' fontSize='1rem' padding='1rem 1.5rem' height='100%'>
                        +
                    </Button>
                </Flex>
                :
                <Flex id="add-shopcar" alignItems="center" mt='2rem'
                    justifyContent={['center', 'center', 'flex-start', 'flex-start', 'flex-start']}
                    height='auto' gap='1.2rem' flexWrap='wrap'>
                    <Flex id='quantity-button' height='100%' w='8rem'>
                        <Button onClick={decrementQuantity} variant='ghost' fontSize='1rem' padding='1rem 1.5rem' height='100%' >
                            -
                        </Button>
                        <Input
                            border='none'
                            value={quantity}
                            variant='unstyled'
                            onChange={(e) => handleSetQuantity(parseInt(e.target.value) || 1)}
                            textAlign="center"
                        />
                        <Button onClick={incrementQuantity} variant='ghost' fontSize='1rem' padding='1rem 1.5rem' height='100%'>
                            +
                        </Button>
                    </Flex>

                    <Button isDisabled={id !== '' ? false : true} onClick={() => handleAddProduct()} className='add-button'
                        height='100%' borderColor='black' fontSize='1.25rem' fontWeight='400' color='black'>
                        Add To Cart
                    </Button>
                    <Button className='add-button' height='100%' gap='5px' borderColor='black' fontSize='1.25rem' fontWeight='400' color='black'>
                        <FiPlus width='1.4rem' height='1.4rem' />Compare
                    </Button>
                </Flex>
            }
        </>

    );
}
