import { Product, ProductGet, ProductPag, ProductPost, ProductPut } from "../Model/Product";

export interface ProductRepository {
  getProducts(params?: ProductGet): Promise<Product[]>;
  getProductsPag(params?: ProductGet): Promise<ProductPag>;
  postProducts(data:ProductPost): Promise<Product>;
  putProducts(data:ProductPut): Promise<Product>;
  deleteProducts(id:string): Promise<Product>;
}
