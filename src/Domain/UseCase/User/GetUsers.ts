import { User } from "../../Model/User";
import { UserRepository } from "../../Repository/UserRepository";

export interface GetUsersUseCase {
  invoke: () => Promise<User[]>;
}

export class GetUsers implements GetUsersUseCase {
  private userRepo: UserRepository;
  constructor(_userRepo: UserRepository) {
    this.userRepo = _userRepo;
  }

  async invoke() {
    return this.userRepo.getUsers();
  }
}
