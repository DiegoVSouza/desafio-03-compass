import { Category, CategoryGet } from "../../Model/Category";
import { CategoryRepository } from "../../Repository/CategoryRepository";

export interface GetCategorysUseCase {
  invoke: () => Promise<Category[]>;
}

export class GetCategorys implements GetCategorysUseCase {
  private categoryRepo: CategoryRepository;
  constructor(_categoryRepo: CategoryRepository) {
    this.categoryRepo = _categoryRepo;
  }

  async invoke(parms?:CategoryGet) {
    return this.categoryRepo.getCategorys(parms);
  }
}
