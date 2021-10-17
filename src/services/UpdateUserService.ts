import { hash } from "bcryptjs";
import { getRepository } from "typeorm";
import User from "../models/User";

interface RequestDTO {
  id: string;
  name: string;
  email: string;
  password: string;
}

export default class UpdateUserService {
  public async execute({
    id,
    name,
    email,
    password,
  }: RequestDTO): Promise<void> {

    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      const hashedPassword = await hash(password, 8);

      await usersRepository.update({ id }, {
        name,
        email,
        password: hashedPassword,
      });
    } else {
      throw new Error("User doesn't exists.");
    }
  }
}
