import { UserPost, UserPut } from "../../Domain/Model/User";
import { api } from "../Services/api";
import UserDataSource from "../DataSource/UserDataSource";
import { UserAPIEntity } from "../Entity/UserAPIEntity";


export default class UserAPIDataSourceImpl implements UserDataSource {
  async getUsers(): Promise<UserAPIEntity[]> {
    try {
      const { data } = await api.get('/user')
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return [] as UserAPIEntity[];
    }
  }

  async postUsers(postData: UserPost): Promise<UserAPIEntity> {
    try {
      const { data } = await api.post('/user', postData)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as UserAPIEntity;
    }
  }
  async putUsers(putData: UserPut): Promise<UserAPIEntity> {
    try {
      const { data } = await api.put(`/User/${putData.id}`, putData)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as UserAPIEntity;
    }
  }
  async deleteUsers(UserId:string): Promise<UserAPIEntity> {
    try {
      const { data } = await api.delete(`/User/${UserId}`)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as UserAPIEntity;
    }
  }



}
