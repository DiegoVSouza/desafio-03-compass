import { Category, CategoryGet, CategoryPost, CategoryPut } from "../Model/Category";

export interface CategoryRepository {
  getCategorys(params?:CategoryGet): Promise<Category[]>;
  postCategorys(data:CategoryPost): Promise<Category>;
  putCategorys(data:CategoryPut): Promise<Category>;
  deleteCategorys(id:string): Promise<Category>;
}
