import { useEffect, useState } from 'react';
import CategoryModel from '../../../main/hooks/CategoryModel';
import './CategoryHolder.css'
import { Box, Text, Image, Flex } from '@chakra-ui/react';
import LoadingSpinner from '../Notification/LoadingSpinner';

interface CategoryHolderInterface {
    title: string;
    quantity: number;
}
export default function CategoryHolder({ title, quantity }: CategoryHolderInterface) {
    const [isLoading, setIsLoading] = useState(true)

    const { Categorys, getCategorys } = CategoryModel()

    useEffect(() => {
        getCategorys({ limit: quantity }).then(() => {
            setIsLoading(false)
        })
    }, [])

    let CategorysMockUp = [
        {
            id: "1",
            name: "Dining",
            image_link: "https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXDN~~SIONEDUSYZ24UpXRHM~QdpUbJ1TDVyH-ZgTLjT5CP94xJPqJoRP48OIVtBzNoROXqjwlDsAnTV1~nI~dCL9wkKC3nqcyoReWK3i53vtA~4moc7r4AXw5eMnabZGZjRl0zP-FwMnkoYMhp4lS2Pkx6zCdZbgIOL0f4tOQZqeQIGjFPzbDP4UeKSxdDXRzYu6jBaeS2knZK0uPyIbsj1~H1tc81llFHX60fyrCqbME3jYDKpxuwMM9JayaHLqBECWayib51991JmATWPgzwFF5UJzEwsP09ahI0ackudCtUxovJx6ic86TYRYQkb91hUALJOJGITSLvIik4YYA__",
            description: "Categoria de produtos eletrônicos",
            created_date: new Date("2022-04-10"),
            updated_date: new Date("2022-04-15"),
        },
        {
            id: "2",
            name: "Living",
            image_link: "https://s3-alpha-sig.figma.com/img/b7e3/92a7/f3961ca2b1edab00f7a7640b3c2ed666?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UWkYirOcM84vicXMxO-LuZ8ySaRfMWy7iPPl9XogWFJXArZTCG3WtoOmlE9weEDq9XZosblLQG4nbe8GOWqSFqU8760pFYv5EIlsrtEakkQoCvbzzJw3YpRppJYzm2f6Y-6hkZrUIWLtm5DIL3O17ojPb~05Y5rBJNxNIqiOXu~cyY7JhbG3U6OCuPuo1iG7rhJupeFUKxXC9GcqWIo36dI7Fq5G0jJZJxQ5GwRMustfpaFGxUtdQ~lZg~lSeXBTFQ3u1awoWTb9xFVlUbFbJ8agIhKtlPCOzP-b7JNjsgkZXnOtcbgg~~1w574W185lCSx6DL5hdwtTSgvLaqWrmQ__",
            description: "Categoria de roupas masculinas e femininas",
            created_date: new Date("2022-04-12"),
            updated_date: new Date("2022-04-17"),
        },
        {
            id: "3",
            name: "Bedroom",
            image_link: "https://s3-alpha-sig.figma.com/img/77e4/946e/ec6e291e21c9694ce22e6c5b50d777fe?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g9LSdhlWdnWzscx8DAOeGOlGZyZ9lV1FdGSShq0uqUaXr~EVWA~gRuytZwNJvDei32X2q~dgyNBOTicI2axXh03GeMwLBfkdJlsanUNtzw6Ofy9kCvYD~e3OqFQfD8snQqUDbAAv1XjUoq8FacO4rMU~aDUpmJnOUn2f2~m0h196b3QXQS2SMuU3VDndye~GlAFrJBdQkL7I7AiqUMayAU0c4SVIV26aEUOPYebXNVr7BaMWZlzHy43aeB0uy7Xcq8ow0Gm5WiBPcPaDeZEaWDJc-3XaNnjxjrShufUaZYfCV~2m20PDFHMBV2RZDyC9syojSP7HlcdBW9t5FtGjSg__",
            description: "Categoria de livros de ficção e não ficção",
            created_date: new Date("2022-04-14"),
            updated_date: new Date("2022-04-19"),
        }
    ]

    return (
        <Box as='section' mb='3.5rem' textAlign='center' padding={['0 1.5rem', '0 2rem', '0 3rem', '0 6rem', '0 8rem']} width='100%'>
            {isLoading ? <LoadingSpinner /> :
                <>
                    <Text mb='5.5rem' fontSize='2rem' fontWeight='bold'>{title}</Text>
                    <Flex gap='1.25rem' flexWrap='wrap'>
                        {CategorysMockUp.map(item => (
                            <Box w='24rem' key={item.id} className='category'>
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
