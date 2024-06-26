import { ProductGet, ProductPost, ProductPut } from "../../Domain/Model/Product";
import { ProductRepository } from "../../Domain/Repository/ProductRepository";
import ProjectDataSource from "../DataSource/ProductDataSource";

export class ProductRepositoryImpl implements ProductRepository {
  dataSource: ProjectDataSource;

  constructor(_datasource: ProjectDataSource) {
    this.dataSource = _datasource;
  }

  async getProducts(params?: ProductGet) {
    return this.dataSource.getProducts(params);
  }
  async getProductsPag(params?: ProductGet) {
    return this.dataSource.getProductsPag(params);
  }
  async postProducts(data:ProductPost) {
    return this.dataSource.postProducts(data);
  }
  async putProducts(data:ProductPut) {
    return this.dataSource.putProducts(data);
  }
  async deleteProducts(id:string) {
    return this.dataSource.deleteProducts(id);
  }

}
