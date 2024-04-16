import { User, UserPost } from "../../Model/User";
import { UserRepository } from "../../Repository/UserRepository";

export interface PostUsersUseCase {
  invoke: (data:UserPost) => Promise<User>;
}

export class PostUsers implements PostUsersUseCase {
  private userRepo: UserRepository;
  constructor(_userRepo: UserRepository) {
    this.userRepo = _userRepo;
  }

  async invoke(data:UserPost) {
    return this.userRepo.postUsers(data);
  }
}
