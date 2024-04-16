import { useEffect } from "react";
import './Footer.css'
import { Box, Flex, Image, Input, Text, Button, Divider } from "@chakra-ui/react";
import trophy from '../../assets/images/trophy 1.svg'
export default function Footer() {
    return (
        <footer id="pagFooter">
            {/* <Flex as='section'>
                <Flex>
                    <Image src={trophy}/>
                    <Box>
                    </Box>
                    </Flex>
            </Flex> */}
            <Flex as='section' flexWrap='wrap' gap='8.5rem' mb='3rem'>
                <Flex direction='column'>
                    <Text fontSize='1.5rem' mb='3rem' fontWeight='bold'>Funiro.</Text>
                    <Text className="text-secundary">400 University Drive Suite 200 Coral Gables,
                        FL 33134 USA</Text>
                </Flex>
                <Flex direction='column' fontWeight='bold'>
                    <Text className="text-secundary" mb='3rem'>Links</Text>
                    <Flex direction='column' className='footer-links' gap='2.8rem'>
                        <Text>Home</Text>
                        <Text>Shop</Text>
                        <Text>About</Text>
                        <Text>Contact</Text>
                    </Flex>
                </Flex>

                <Flex direction='column' fontWeight='bold'>
                    <Text className="text-secundary" mb='3rem'>Help</Text>
                    <Flex direction='column' className='footer-links' gap='2.8rem'>
                        <Text>Payment Options</Text>
                        <Text>Returns</Text>
                        <Text>Privacy Policies</Text>
                    </Flex>
                </Flex>
                <Flex direction='column' fontWeight='bold'>
                    <Text className="text-secundary" mb='3rem'>Newsletter</Text>
                    <Flex direction={['column','row','row','row','row']} alignItems={['flex-start','center','center','center','center']} justifyContent='flex-start'  gap='2.8rem'>
                       <Input variant='flushed' borderColor='black' placeholder="Enter Your Email Address" />
                       <Text id='newsletter-button' >SUBSCRIBE</Text>
                    </Flex>
                </Flex>
            </Flex>
            <hr/>
            <Text mt='2.2rem' fontSize='1rem'>2023 furino. All rights reverved</Text>
        </footer>
    );
}
