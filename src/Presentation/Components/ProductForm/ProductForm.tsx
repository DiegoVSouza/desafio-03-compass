import { useEffect } from 'react';
import './ProductForm.css'
import {
  Box, Flex, Text, Image, Button, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Select,
} from "@chakra-ui/react";
import { FiEdit2 } from "react-icons/fi";
import { TfiTrash } from "react-icons/tfi";
import StoreModel from '../../../main/models/UserModel';
import Notification from '../Notification/Notification';
import InputComponent from '../Inputs/InputComponent';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CheckboxComponent from '../Inputs/CheckBoxComponent';
import { Product, ProductPost } from '../../../Domain/Model/Product';

interface ProductFormInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  edit: boolean;
}

const productSchema = yup.object({
  name: yup.string().required('Digite um nome válido'),
  categoryId: yup.string().required('Digite uma categoria válida'),
  description: yup.string().required('Digite uma descrição válida'),
  large_description: yup.string().required('Digite uma descrição detalhada válida'),
  price: yup.number().required('Digite um preço válido'),
  discount_price: yup.number().required('Digite um preço de desconto válido'),
  discount_percent: yup.number().required('Digite um percentual de desconto válido'),
  sku: yup.string().required('Digite uma SKU válida'),
  attributes: yup.array().of(yup.object({
    image_link: yup.string().required('Insira o link da imagem'),
    color: yup.string().required('Digite uma cor válida'),
    qtd: yup.number().required('Digite uma quantidade válida'),
    size: yup.string().required('Digite um tamanho válido'),
  })).required('Insira os atributos'),
  is_new: yup.boolean().required('Indique se o produto é novo ou não'),
}).required();


export default function ProductForm({ isOpen, onClose, onOpen, edit = false }: ProductFormInterface) {

  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<ProductPost>({
    resolver: yupResolver(productSchema),
  });

  const submitProduct = (data: ProductPost) => {
    console.log(data)
  }

  return (
    <Modal size={'6xl'} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{edit ? 'Editar Loja' : 'Criar Nova Loja'}</ModalHeader>

        <ModalCloseButton />
        <form onSubmit={handleSubmit(submitProduct)}>
          <ModalBody>
            <Flex flexWrap='wrap'>
              <InputComponent labelName="Email" inputName="email" register={register} errors={errors} />
              <InputComponent labelName="Name" inputName="name" register={register} errors={errors} />
              <InputComponent labelName="Neighborhood" inputName="neighborhood" register={register} errors={errors} />
              <InputComponent labelName="Street" inputName="street" register={register} errors={errors} />
              <InputComponent labelName="Number" inputName="number" register={register} errors={errors} />
              <InputComponent labelName="City" inputName="city" register={register} errors={errors} />
              <InputComponent labelName="State" inputName="state" register={register} errors={errors} />
              <InputComponent labelName="CEP" inputName="cep" register={register} errors={errors} />
              <InputComponent labelName="Phone" inputName="phone" register={register} errors={errors} />
              <InputComponent labelName="File" inputName="file" register={register} errors={errors} />
              <InputComponent labelName="Password" inputName="password" register={register} errors={errors} />
              <InputComponent labelName="Role ID" inputName="roleId" register={register} errors={errors} />
              <CheckboxComponent labelName="Credit Card" inputName="payment_method.creditcard" register={register} />
              <CheckboxComponent labelName="Money" inputName="payment_method.money" register={register} />
              <CheckboxComponent labelName="PIX" inputName="payment_method.pix" register={register} />
            </Flex>

          </ModalBody>
          <ModalFooter>
            <Button colorScheme='green' type='submit'>Criar Loja</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
