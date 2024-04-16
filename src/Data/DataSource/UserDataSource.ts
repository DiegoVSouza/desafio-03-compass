import { UserPost, UserPut } from "../../Domain/Model/User";
import { UserAPIEntity } from "../Entity/UserAPIEntity";

export default interface UserDataSource {
  getUsers(): Promise<UserAPIEntity[]>;
  postUsers(data:UserPost): Promise<UserAPIEntity>;
  putUsers(data:UserPut): Promise<UserAPIEntity>;
  deleteUsers(id:string): Promise<UserAPIEntity>;
}
