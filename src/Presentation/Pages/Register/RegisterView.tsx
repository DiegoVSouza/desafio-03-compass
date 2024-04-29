import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Creators as Auth } from '../../../store/modules/authentication/actions'
import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Image, Select, Text, useColorMode } from "@chakra-ui/react";
import * as yup from "yup";
import { Login } from '../../../Domain/Model/Token';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputComponent from '../../Components/Inputs/InputComponent';
import logo from '/vercel/path0/public/assets/images/logo.svg'
import './RegisterView.css'
import ButtonComponent from '../../Components/Inputs/ButtonComponent';
import { UserPost } from '../../../Domain/Model/User';
import UserModel from '../../../main/models/UserModel';
import Notification from '../../Components/Notification/Notification';
import { CgDanger } from 'react-icons/cg';

const registerSchema = yup.object({
    email: yup.string().required("Informe seu email").email("Informe um email válido"),
    password: yup.string().required("Informe sua senha"),
    name: yup.string().required("Informe seu nome"),
    cpf: yup.string().required("Informe seu CPF"),
    document: yup.string().required("Informe seu documento"),
    sex: yup.string().required("Informe seu sexo"),
    birthdate: yup.string().required("Informe sua data de nascimento"),
    phone: yup.number().required("Informe seu telefone"),
    address: yup.object({
        zipCode: yup.string().required("Informe o CEP"),
        street: yup.string().required("Informe a rua"),
        number: yup.string().required("Informe o número"),
        complement: yup.string(),
        neighborhood: yup.string().required("Informe o bairro"),
        city: yup.string().required("Informe a cidade"),
        state: yup.string().required("Informe o estado")
    }).required("Informe o endereço")
}).required();

export default function RegisterView() {

    const dispatch = useDispatch();

    const history = useNavigate()

    const { postUsers } = UserModel()

    const {
        register,
        handleSubmit,
        reset,
        setError,
        clearErrors,
        formState: { errors },
    } = useForm<UserPost>({
        resolver: yupResolver(registerSchema),
    });

    const verifyError = () => {
        reset()
        setError('email', { message: "Email não validado" })
        setError('password', { message: "ou senha incorreta" })
    }
    console.log(errors)

    const SubmitRegister = async (data: UserPost) => {
        console.log(data)
        postUsers(data).then(async () => {
            Notification.success("User created successfully")
            setTimeout(() => history('/home'), 1000)
        }).catch(()=>{
            Notification.error("Error on create User")
        })
        // dispatch(Auth.loginRequest(data.email, data.password, history, verifyError))
        // verifyError()
    }

    return (
        <main id='login-main'>
            <Flex position='relative' justifyContent='center'>
                <Flex className='form-container' direction='column' as='section' gap='1rem' w={['85%', '75%', '50%', '50%', '50%']}
                    justifyContent='center' zIndex={2} align='center' alignItems='flex-start' padding={['1rem 2rem', '1rem 2rem', '1rem 3rem', '1.5rem 6.25rem', '1.5rem 6.25rem']} >

                    <Image cursor='pointer' onClick={() => history('/home')} src={logo} w='10rem' mb='3rem' />
                    <Text className='text-feature' fontSize='1rem' fontWeight='bold'>Register</Text>
                    <Text color='black' fontSize='2rem' mb='3rem' fontWeight='bold'>Register</Text>
                    <Text color='black' fontSize='1.25rem' fontWeight='500'>Register a new account</Text>
                    <Text className='text-secundary' fontSize='1.25rem'>Fill in the information below to register</Text>
                    <Box as='article' w='100%' mt='1.5rem'>

                        <form onSubmit={handleSubmit(SubmitRegister)}>
                            <InputComponent labelName="Email" inputName="email" register={register} errors={errors} />
                            <InputComponent labelName="Password" inputName="password" type="password" register={register} errors={errors} />
                            <InputComponent labelName="Name" inputName="name" register={register} errors={errors} />
                            <InputComponent labelName="CPF" inputName="cpf" register={register} errors={errors} />
                            <InputComponent labelName="Document" inputName="document" register={register} errors={errors} />
                            <FormControl variant="floating" id='sex' isInvalid={errors['sex']?.message ? true : false}>

                                <Select {...register('sex')}  >
                                    <option value='outro' >
                                        Prefiro não dizer / outro(a)
                                    </option>
                                    <option value='masculino' >
                                        Masculino
                                    </option>
                                    <option value='feminino' >
                                        Feminino
                                    </option>
                                </Select>
                                <FormLabel
                                    fontWeight={'bold'}
                                >
                                    Sex
                                </FormLabel>

                                {errors['sex']?.message && (
                                    <Flex w='100%' gap='0.5rem' alignItems='center'>
                                        <CgDanger color="red" size={18} /> <Text color='red'>{errors['sex']?.message as string}</Text>
                                    </Flex>
                                )}
                            </FormControl>

                            {/* <InputComponent  labelName="Sex" inputName="sex" register={register} errors={errors} /> */}
                            <InputComponent type='date' labelName="Birthdate" inputName="birthdate" register={register} errors={errors} />
                            <InputComponent labelName="Phone" inputName="phone" register={register} errors={errors} />
                            <InputComponent labelName="Zip Code" inputName="address.zipCode" register={register} errors={errors} />
                            <InputComponent labelName="Street" inputName="address.street" register={register} errors={errors} />
                            <InputComponent labelName="Number" inputName="address.number" register={register} errors={errors} />
                            <InputComponent labelName="Complement" inputName="address.complement" register={register} errors={errors} />
                            <InputComponent labelName="Neighborhood" inputName="address.neighborhood" register={register} errors={errors} />
                            <InputComponent labelName="City" inputName="address.city" register={register} errors={errors} />
                            <InputComponent labelName="State" inputName="address.state" register={register} errors={errors} />
                            <Box mt='1rem'></Box>
                            <ButtonComponent type='submit' width='100%' full={true} labelName='Register' />
                        </form>
                        <Flex className='change-login-register' alignItems='center' justifyContent='center' gap='0.5rem' mt='2rem'>
                            <Text>Alredy have a account?</Text>
                            <Button variant='link' onClick={() => history('/login')}>Login</Button>
                        </Flex>
                    </Box>
                </Flex>
                <Image w={['100%', '100%', '50%', '50%', '50%']} position={['absolute', 'absolute', 'unset', 'unset', 'unset']} height='100%'
                    objectFit='cover' src='https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            </Flex>

        </main>
    )
}