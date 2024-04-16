import { UserPost, UserPut } from "../../Domain/Model/User";
import { UserRepository } from "../../Domain/Repository/UserRepository";
import ProjectDataSource from "../DataSource/UserDataSource";

export class UserRepositoryImpl implements UserRepository {
  dataSource: ProjectDataSource;

  constructor(_datasource: ProjectDataSource) {
    this.dataSource = _datasource;
  }

  async getUsers() {
    return this.dataSource.getUsers();
  }
  async postUsers(data:UserPost) {
    return this.dataSource.postUsers(data);
  }
  async putUsers(data:UserPut) {
    return this.dataSource.putUsers(data);
  }
  async deleteUsers(id:string) {
    return this.dataSource.deleteUsers(id);
  }

}
