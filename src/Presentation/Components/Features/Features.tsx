import { Text, Flex, Image, Box } from '@chakra-ui/react';
import './Features.css';
import trophy from '/vercel/path0/public/assets/images/trophy 1.svg'
import guarantee from '/vercel/path0/public/assets/images/guarantee.svg'
import shipping from '/vercel/path0/public/assets/images/shipping.svg'
import customerSupport from '/vercel/path0/public/assets/images/customer-support.svg'

export default function Features() {

    return (
        <Flex id='features' flexWrap='wrap' mt='4.25rem' gap={['2rem','2rem','2rem','2rem','0']} height={['100%','100%','100%','100%','17rem']} as='section'
         alignItems='center' justifyContent='space-between'  padding={['2rem','2rem 2.5rem','2rem 2.5rem','2rem 3.3rem','0 3.3rem']}>
            <Flex>
                <Image src={trophy} />
                <Box>
                    <Text fontWeight='bold'>High Quality</Text>
                    <Text  >crafted from top materials</Text>
                </Box>
            </Flex>
            <Flex>
                <Image src={guarantee} />
                <Box>
                    <Text fontWeight='bold'>Warranty Protection</Text>
                    <Text  >Over 2 years</Text>
                </Box>
            </Flex>
            <Flex>
                <Image src={shipping} />
                <Box>
                    <Text fontWeight='bold'>Free Shipping</Text>
                    <Text  >Order over 150 $</Text>
                </Box>
            </Flex>
            <Flex>
                <Image src={customerSupport} />
                <Box>
                    <Text fontWeight='bold'>24 / 7 Support</Text>
                    <Text  >Dedicated support</Text>
                </Box>
            </Flex>
        </Flex>
    );
}
