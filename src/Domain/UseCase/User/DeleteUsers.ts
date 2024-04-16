import { User } from "../../Model/User";
import { UserRepository } from "../../Repository/UserRepository";

export interface DeleteUsersUseCase {
  invoke: (id:string) => Promise<User>;
}

export class DeleteUsers implements DeleteUsersUseCase {
  private userRepo: UserRepository;
  constructor(_userRepo: UserRepository) {
    this.userRepo = _userRepo;
  }

  async invoke(id:string) {
    return this.userRepo.deleteUsers(id);
  }
}
