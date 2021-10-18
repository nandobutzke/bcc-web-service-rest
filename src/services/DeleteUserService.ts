import { getRepository } from "typeorm";
import User from "../models/User";

interface RequestDTO {
  id: string;
}

export default class DeleteUserService {
  public async execute({
    id
  }: RequestDTO): Promise<void> {
    const usersRepository = getRepository(User);

    await usersRepository.delete({ id });
  }
}
