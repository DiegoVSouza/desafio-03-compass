import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Creators as Auth } from '../../../store/modules/authentication/actions'
import { Box, Button, Checkbox, Flex, FormControl, Image, Text, useColorMode } from "@chakra-ui/react";
import * as yup from "yup";
import { Login } from '../../../Domain/Model/Token';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputComponent from '../../Components/Inputs/InputComponent';
import logo from '../../assets/images/logo.svg'
import './LoginView.css'
import ButtonComponent from '../../Components/Inputs/ButtonComponent';

const loginSchema = yup
    .object({
        email: yup.string().required("Informe seu email").email("Informe um email valido"),
        password: yup.string().required("Informe sua senaha"),
    })
    .required();

export default function LoginPage() {

    const dispatch = useDispatch();

    const history = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        setError,
        clearErrors,
        formState: { errors },
    } = useForm<Login>({
        resolver: yupResolver(loginSchema),
    });

    const verifyError = () => {
        reset()
        setError('email', { message: "Email não validado" })
        setError('password', { message: "ou senha incorreta" })
    }

    const SubmitLogin = async (data: Login) => {
        console.log(data)
        dispatch(Auth.loginRequest(data.email, data.password, history, verifyError))
        verifyError()
    }

    return (
        <main id='login-main'>
            <Flex position='relative'  justifyContent='center'>
                <Image w={['100%', '100%', '50%', '50%', '50%']} position={['absolute', 'absolute', 'unset', 'unset', 'unset']} height='100vh' objectFit='cover' src='https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                <Flex className='form-container' direction='column' as='section' gap='1rem' w={['85%', '75%', '50%', '50%', '50%']}
                    justifyContent='center' zIndex={2} align='center' alignItems='flex-start' padding={['1rem 2rem', '1rem 2rem', '1rem 3rem', '1.5rem 6.25rem', '1.5rem 6.25rem']} >

                    <Image onClick={()=>history('/home')} src={logo} w='10rem' mb='3rem' />
                    <Text className='text-feature' fontSize='1rem' fontWeight='bold'>Entrar</Text>
                    <Text color='black' fontSize='2rem' mb='3rem' fontWeight='bold'>Entrar</Text>
                    <Text color='black' fontSize='1.25rem' fontWeight='500'>Log in to your account</Text>
                    <Text className='text-secundary' fontSize='1.25rem'>Fill in the information below to log in</Text>
                    <Box as='article' w='100%' mt='1.5rem'>

                        <form onSubmit={handleSubmit(SubmitLogin)}>
                            <InputComponent labelName='Login' inputName='email' register={register} errors={errors} />
                            <InputComponent labelName='Password' inputName='password' type='password' register={register} errors={errors} />
                            <Checkbox m='1rem 0'>Remember me</Checkbox>
                            <ButtonComponent width='100%' full={true} labelName='Fazer login' />
                        </form>
                        <Flex className='change-login-register' alignItems='center' justifyContent='center' gap='0.5rem' mt='2rem'>
                            <Text>Dont have a account?</Text>
                            <Button variant='link' onClick={()=>history('/register')}>Register</Button>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>

        </main>
    )
}