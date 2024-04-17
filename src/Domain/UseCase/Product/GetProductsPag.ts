import { ProductGet, ProductPag } from "../../Model/Product";
import { ProductRepository } from "../../Repository/ProductRepository";

export interface GetProductsPagUseCase {
  invoke: () => Promise<ProductPag>;
}

export class GetProductsPag implements GetProductsPagUseCase {
  private productRepo: ProductRepository;
  constructor(_productRepo: ProductRepository) {
    this.productRepo = _productRepo;
  }

  async invoke(params?: ProductGet) {
    return this.productRepo.getProductsPag(params);
  }
}
