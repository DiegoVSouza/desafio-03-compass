import { ProductGet, ProductPost, ProductPut } from "../../Domain/Model/Product";
import { api } from "../Services/api";
import ProductDataSource from "../DataSource/ProductDataSource";
import { ProductAPIEntity, ProductPagAPIEntity } from "../Entity/ProductAPIEntity";


export default class ProductAPIDataSourceImpl implements ProductDataSource {
  async getProducts(params?: ProductGet): Promise<ProductAPIEntity[]> {
    try {
      let url = '/product';
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
      return [] as ProductAPIEntity[];
    }
  }

  async getProductsPag(params?: ProductGet): Promise<ProductPagAPIEntity> {
    try {
      let url = '/product/pag';
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

      console.log('>>>>>>>>',params)

      const { data } = await api.get(url);
      return data;
    } catch (error: any) {
      console.log(error);
      return {} as ProductPagAPIEntity;
    }
  }

  async postProducts(postData: ProductPost): Promise<ProductAPIEntity> {
    try {
      const { data } = await api.post('/Product', postData)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as ProductAPIEntity;
    }
  }
  async putProducts(putData: ProductPut): Promise<ProductAPIEntity> {
    try {
      const { data } = await api.put(`/Product/${putData.id}`, putData)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as ProductAPIEntity;
    }
  }
  async deleteProducts(ProductId: string): Promise<ProductAPIEntity> {
    try {
      const { data } = await api.delete(`/Product/${ProductId}`)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as ProductAPIEntity;
    }
  }



}
