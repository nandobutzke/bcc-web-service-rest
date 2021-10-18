import { getRepository } from "typeorm";
import Product from "../models/Product";

interface RequestDTO {
  name: string;
  description: string;
  stock: number;
  price: number;
}

export default class CreateProductService {
  public async execute({
    name,
    description,
    stock,
    price,
  }: RequestDTO): Promise<Product> {
    const productsRepository = getRepository(Product);

    const product = productsRepository.create({
      name,
      description,
      stock,
      price,
    });

    await productsRepository.save(product);

    return product;
  }
}
