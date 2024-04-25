import { CategoryGet, CategoryPost, CategoryPut } from "../../Domain/Model/Category";
import { api } from "../Services/api";
import CategoryDataSource from "../DataSource/CategoryDataSource";
import { CategoryAPIEntity } from "../Entity/CategoryAPIEntity";

export default class CategoryAPIDataSourceImpl implements CategoryDataSource {
  async getCategorys(params: CategoryGet): Promise<CategoryAPIEntity[]> {
    try {
      let url = '/category';
      let isFirstParam = true;

      if (params) {
        for (const key in params) {
          if (Object.prototype.hasOwnProperty.call(params, key)) {
            const value = params[key];
            if (value !== undefined && value !== null) {
              if (isFirstParam) {
                url += `?${key}=${value}`;
                isFirstParam = false;
              } else {
                url += `&${key}=${value}`;
              }
            }
          }
        }
      }

      const { data } = await api.get(url);
      return data;
    } catch (error: any) {
      console.log(error);
      return [] as CategoryAPIEntity[];
    }
  }


  async postCategorys(postData: CategoryPost): Promise<CategoryAPIEntity> {
    try {
      const { data } = await api.post('/category', postData)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as CategoryAPIEntity;
    }
  }
  async putCategorys(putData: CategoryPut): Promise<CategoryAPIEntity> {
    try {
      const { data } = await api.put(`/category/${putData.id}`, putData)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as CategoryAPIEntity;
    }
  }
  async deleteCategorys(categoryId: string): Promise<CategoryAPIEntity> {
    try {
      const { data } = await api.delete(`/category/${categoryId}`)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as CategoryAPIEntity;
    }
  }



}
