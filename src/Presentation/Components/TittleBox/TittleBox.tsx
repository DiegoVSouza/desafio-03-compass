import React from "react";
import './TittleBox.css'
import { Text, Flex, Image, Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import bigger from '../../assets/images/bigger than.svg'

export default function TittleBox() {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    let lastNumber = pathSegments.length - 1
    const upperCaseFirstLetter = (string:string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <Flex as='section' position='relative' height='20rem' direction='column' justifyContent='center' alignItems='center'>
            <Image opacity='50%' w='100%' height='100%' objectFit='cover' src='https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qxx4quNjTXEfg64PlWVu3NwT5SWkAvKuR3aci~~T6P7hw5B6I6gfostvIRAx6ZZIClZlfSWUqvJT36QUuncbWcjaPBK9zWv7nN-18mG0lvsbKDOUukygLH76DltWuLTAZ38-tuFZCcpEyGpWQivlIsh7Pk52t-wlQAKfDYpP~L~BLmbNFvIhmAF3dnPwHa3d-5skhjMlA38gltA3yStu~jOa6gtgcAX6jn0-822gKGurGK1ezjsUaDUOY~l36bxjqwIPIY-OvDf4lQvMFKq2IMTAQSF9y7OKeUOgdb6ngwkvH4CQZbsyzEbq8AamZ25NEWNN3pgG36B1dhEi5XeL1A__'/>
            <Box id='title-info' >
            <Text fontSize='3rem' fontWeight="bold">{upperCaseFirstLetter(pathSegments[lastNumber])}</Text>
            <Flex justifyContent="center" gap='0.4rem' alignItems="center">
                {pathSegments.map((segment, index) => (
                    <React.Fragment key={segment}>
                        {index >= lastNumber && <Image src={bigger}/>}
                        <Text  color='black'  cursor={index >= lastNumber ? 'default' : 'pointer' } fontWeight={index >= lastNumber ? 'regular' : 'bold'} onClick={index >= lastNumber ? ()=>{} : () => window.location.href = `/${segment}`}>
                            {upperCaseFirstLetter(segment)}
                        </Text>
                    </React.Fragment>
                ))}
            </Flex>
            </Box>
            
        </Flex>
    );
}