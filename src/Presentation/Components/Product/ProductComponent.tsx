import './ProductComponent.css'
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { FiEdit2 } from "react-icons/fi";
import { Product } from '../../../Domain/Model/Product';
interface ProductComponentInterface {
  product: Product
}

export default function ProductComponent({ product }: ProductComponentInterface) {


  return (
    <Box className="Product" padding={['0.5rem 0.75rem', '0.75rem 1rem', '1rem 1.5rem']} w='auto' height='10rem'>
      <Image alt={`'logo da ${product.name}`} src={product.image_links[0]} />
      <Flex alignItems='center'>
        <Text><strong>Nome:</strong> {product.name}</Text>
        <Text><strong>Email:</strong> {product.description}</Text>
      </Flex>
      <Flex>
        <Button colorScheme='yellow'><FiEdit2 /> Editar</Button>
      </Flex>
    </Box>
  );
}
