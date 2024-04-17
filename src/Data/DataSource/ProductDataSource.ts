import { ProductGet, ProductPost, ProductPut } from "../../Domain/Model/Product";
import { ProductAPIEntity, ProductPagAPIEntity } from "../Entity/ProductAPIEntity";

export default interface ProductDataSource {
  getProducts(params?: ProductGet): Promise<ProductAPIEntity[]>;
  getProductsPag(params?: ProductGet): Promise<ProductPagAPIEntity>;
  postProducts(data:ProductPost): Promise<ProductAPIEntity>;
  putProducts(data:ProductPut): Promise<ProductAPIEntity>;
  deleteProducts(id:string): Promise<ProductAPIEntity>;
}
