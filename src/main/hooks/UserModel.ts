import { useEffect, useState } from "react";
import { User, UserPost, UserPut } from "../../Domain/Model/User";
import { UserRepositoryImpl } from "../../Data/Repository/UserRepositoryImpl";
import { GetUsers } from "../../Domain/UseCase/User/GetUsers";
import { PostUsers } from "../../Domain/UseCase/User/PostUsers";
import { PutUsers } from "../../Domain/UseCase/User/PutUsers";
import { DeleteUsers } from "../../Domain/UseCase/User/DeleteUsers";
import UserAPIDataSourceImpl from "../../Data/API/UserAPIDataSource";

export default function UserModel() {
  const [Users, setUsers] = useState<User[]>([]);
  const [User, setUser] = useState<User>();

  const usersDataSourceImpl = new UserAPIDataSourceImpl();
  const usersRepositoryImpl = new UserRepositoryImpl(usersDataSourceImpl);

  const getUsersUseCase = new GetUsers(usersRepositoryImpl);
  const postUsersUseCase = new PostUsers(usersRepositoryImpl);
  const putUsersUseCase = new PutUsers(usersRepositoryImpl);
  const deleteUsersUseCase = new DeleteUsers(usersRepositoryImpl);

  async function getUsers() {
    setUsers(await getUsersUseCase.invoke());
  }
  async function postUsers(data:UserPost) {
    setUser(await postUsersUseCase.invoke(data));
  }
  async function putUsers(data:UserPut) {
    setUser(await putUsersUseCase.invoke(data));
  }
  async function deleteUsers(id:string) {
    setUser(await deleteUsersUseCase.invoke(id));
    await getUsers()
  }

  function onChangeValue(id: String) {
    let User = Users.find(item=> item.id === id)
    setUser(User);
  }

  return {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers,
    onChangeValue,
    Users,
    User
  };
}
