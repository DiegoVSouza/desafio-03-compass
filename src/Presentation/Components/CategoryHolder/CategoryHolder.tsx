import { useEffect, useState } from 'react';
import CategoryModel from '../../../main/models/CategoryModel';
import './CategoryHolder.css'
import { Box, Text, Image, Flex } from '@chakra-ui/react';
import LoadingSpinner from '../Notification/LoadingSpinner';
import { useNavigate } from 'react-router-dom';
import { CategorysMockUp } from './mockedValues';

interface CategoryHolderInterface {
    title: string;
    quantity: number;
}
export default function CategoryHolder({ title, quantity }: CategoryHolderInterface) {
    const [isLoading, setIsLoading] = useState(true)
    const history = useNavigate()
    const { Categorys, getCategorys, onChangeValue } = CategoryModel()

    useEffect(() => {
        getCategorys({ limit: quantity }).then(() => {
            setIsLoading(false)
        })
    }, [])

    const goToShopCategory = (id:string) =>{
        onChangeValue(id)
        history('/home/shop/')
    }

    

    return (
        <Box as='section' mb='3.5rem' textAlign='center' padding={['0 1.5rem', '0 2rem', '0 3rem', '0 6rem', '0 8rem']} width='100%'>
            {isLoading ? <LoadingSpinner /> :
                <>
                    <Text mb='5.5rem' fontSize='2rem' fontWeight='bold'>{title}</Text>
                    <Flex gap='1.25rem' flexWrap='wrap' justifyContent='center'>
                        {CategorysMockUp.map(item => (
                            <Box w='24rem' key={item.id} className='category' onClick={()=>goToShopCategory(item.id)}>
                                <Image height='30rem' width='100%' objectFit='cover' src={item.image_link} borderRadius='10px' />
                                <Text pt='2rem' fontWeight='bold' fontSize='1.5rem'>{item.name}</Text>
                            </Box>
                        ))}
                    </Flex>
                </>

            }

        </Box>
    );
}
