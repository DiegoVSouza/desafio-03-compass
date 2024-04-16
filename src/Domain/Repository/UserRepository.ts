import { User, UserPost, UserPut } from "../Model/User";

export interface UserRepository {
  getUsers(): Promise<User[]>;
  postUsers(data:UserPost): Promise<User>;
  putUsers(data:UserPut): Promise<User>;
  deleteUsers(id:string): Promise<User>;
}
