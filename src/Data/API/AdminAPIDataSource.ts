import { AdminPost, AdminPut } from "../../Domain/Model/Admin";
import { api } from "../Services/api";
import AdminDataSource from "../DataSource/AdminDataSource";
import { AdminAPIEntity } from "../Entity/AdminAPIEntity";

export default class AdminAPIDataSourceImpl implements AdminDataSource {
  async getAdmins(): Promise<AdminAPIEntity[]> {
    try {
      const { data } = await api.get('/admin')
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return [] as AdminAPIEntity[];
    }
  }

  async postAdmins(postData: AdminPost): Promise<AdminAPIEntity> {
    try {
      const { data } = await api.post('/admin', postData)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as AdminAPIEntity;
    }
  }
  async putAdmins(putData: AdminPut): Promise<AdminAPIEntity> {
    try {
      const { data } = await api.put('/admin', putData)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as AdminAPIEntity;
    }
  }
  async deleteAdmins(adminId:string): Promise<AdminAPIEntity> {
    try {
      const { data } = await api.delete(`/admin/${adminId}`)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as AdminAPIEntity;
    }
  }



}
