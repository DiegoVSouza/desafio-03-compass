import { CategoryGet, CategoryPost, CategoryPut } from "../../Domain/Model/Category";
import { CategoryAPIEntity } from "../Entity/CategoryAPIEntity";

export default interface CategoryDataSource {
  getCategorys(params?: CategoryGet ): Promise<CategoryAPIEntity[]>;
  postCategorys(data:CategoryPost): Promise<CategoryAPIEntity>;
  putCategorys(data:CategoryPut): Promise<CategoryAPIEntity>;
  deleteCategorys(id:string): Promise<CategoryAPIEntity>;
}
