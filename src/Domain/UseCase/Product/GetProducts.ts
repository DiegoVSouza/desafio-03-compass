import { Product, ProductGet } from "../../Model/Product";
import { ProductRepository } from "../../Repository/ProductRepository";

export interface GetProductsUseCase {
  invoke: () => Promise<Product[]>;
}

export class GetProducts implements GetProductsUseCase {
  private productRepo: ProductRepository;
  constructor(_productRepo: ProductRepository) {
    this.productRepo = _productRepo;
  }

  async invoke(params?: ProductGet) {
    return this.productRepo.getProducts(params);
  }
}
