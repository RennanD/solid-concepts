import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const findedUser = this.usersRepository.findById(user_id);

    if (!findedUser) {
      throw new Error("User not found");
    }

    if (!findedUser.admin) {
      throw new Error("You don't have permissons for this");
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
