import { getRepository } from "typeorm";
import Product from "../models/Product";

interface RequestDTO {
  id: string;
}

export default class DeleteProductService {
  public async execute({
    id
  }: RequestDTO): Promise<void> {
    const productsController = getRepository(Product);

    await productsController.delete({ id });
  }
}
