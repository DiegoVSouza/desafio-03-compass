import { useState } from "react";
import { Product, ProductGet, ProductPag, ProductPost, ProductPut } from "../../Domain/Model/Product";
import { ProductRepositoryImpl } from "../../Data/Repository/ProductRepositoryImpl";
import { GetProducts } from "../../Domain/UseCase/Product/GetProducts";
import { GetProductsPag } from "../../Domain/UseCase/Product/GetProductsPag";
import { PostProducts } from "../../Domain/UseCase/Product/PostProducts";
import { PutProducts } from "../../Domain/UseCase/Product/PutProducts";
import { DeleteProducts } from "../../Domain/UseCase/Product/DeleteProducts";
import ProductAPIDataSourceImpl from "../../Data/API/ProductAPIDataSource";

export default function ProductModel() {
  const [Products, setProducts] = useState<Product[]>([]);
  const [ProductsPag, setProductsPag] = useState<ProductPag>({} as ProductPag);
  const [Product, setProduct] = useState<Product>();

  const productsDataSourceImpl = new ProductAPIDataSourceImpl();
  const productsRepositoryImpl = new ProductRepositoryImpl(productsDataSourceImpl);

  const getProductsUseCase = new GetProducts(productsRepositoryImpl);
  const getProductsPagUseCase = new GetProductsPag(productsRepositoryImpl);
  const postProductsUseCase = new PostProducts(productsRepositoryImpl);
  const putProductsUseCase = new PutProducts(productsRepositoryImpl);
  const deleteProductsUseCase = new DeleteProducts(productsRepositoryImpl);

  async function getProducts(params?: ProductGet) {
    setProducts(await getProductsUseCase.invoke(params));
  }
  async function getProductsPag(params?: ProductGet) {
    setProductsPag(await getProductsPagUseCase.invoke(params));
  }
  async function postProducts(data: ProductPost) {
    setProduct(await postProductsUseCase.invoke(data));
  }
  async function putProducts(data: ProductPut) {
    setProduct(await putProductsUseCase.invoke(data));
  }
  async function deleteProducts(id: string) {
    setProduct(await deleteProductsUseCase.invoke(id));
    await getProducts()
  }

  function onChangeValue(id: String) {
    let Product = Products.find(item => item.id === id)
    setProduct(Product);
  }

  return {
    getProducts,
    getProductsPag,
    postProducts,
    putProducts,
    deleteProducts,
    onChangeValue,
    Products,
    ProductsPag,
    Product
  };
}
