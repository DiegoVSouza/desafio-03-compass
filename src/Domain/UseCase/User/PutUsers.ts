import { User, UserPut } from "../../Model/User";
import { UserRepository } from "../../Repository/UserRepository";

export interface PutUsersUseCase {
  invoke: (data:UserPut) => Promise<User>;
}

export class PutUsers implements PutUsersUseCase {
  private userRepo: UserRepository;
  constructor(_userRepo: UserRepository) {
    this.userRepo = _userRepo;
  }

  async invoke(data:UserPut) {
    return this.userRepo.putUsers(data);
  }
}
