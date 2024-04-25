import { ReactNode, createContext, useContext, useState } from "react";
import { Product, ProductGet, ProductPag, ProductPost, ProductPut } from "../../Domain/Model/Product";
import { ProductRepositoryImpl } from "../../Data/Repository/ProductRepositoryImpl";
import { GetProducts } from "../../Domain/UseCase/Product/GetProducts";
import { GetProductsPag } from "../../Domain/UseCase/Product/GetProductsPag";
import { PostProducts } from "../../Domain/UseCase/Product/PostProducts";
import { PutProducts } from "../../Domain/UseCase/Product/PutProducts";
import { DeleteProducts } from "../../Domain/UseCase/Product/DeleteProducts";
import ProductAPIDataSourceImpl from "../../Data/API/ProductAPIDataSource";

interface ProductModelContextProps {
  getProducts(params?: ProductGet): Promise<void>
  getProductsPag(params?: ProductGet): Promise<void>
  postProducts(data: ProductPost): Promise<void>
  putProducts(data: ProductPut): Promise<void>
  deleteProducts(id: string): Promise<void>
  onChangeValue(id: string): void
  Products: Product[]
  ProductsPag: Omit<ProductPag, 'products'>
  Product: Product | undefined
}

interface Props {
  children: ReactNode;
}

const ProductModelContext = createContext({} as ProductModelContextProps);

function ProductModelProvider({ children }: Props) {
  const [Products, setProducts] = useState<Product[]>([]);
  const [ProductsPag, setProductsPag] = useState<Omit<ProductPag, 'products'>>({} as Omit<ProductPag, 'products'>);
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
    let data = await getProductsPagUseCase.invoke(params)
    const { products, ...restData } = data
    setProductsPag(restData);
    setProducts(products);
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

  function onChangeValue(id: string) {
    setProduct({} as Product)
    let Product = Products.find(item => item.id === id)

    setProduct(Product);
  }



  return (
    <ProductModelContext.Provider value={{
      getProducts,
      getProductsPag,
      postProducts,
      putProducts,
      deleteProducts,
      onChangeValue,
      Products,
      ProductsPag,
      Product
    }}>
      {children}
    </ProductModelContext.Provider>
  );

}

const ProductModel = (): ProductModelContextProps => {
  const context = useContext(ProductModelContext);

  if (!context) {
    throw new Error("");
  }

  return context;
};

export { ProductModel, ProductModelProvider };

