import { getRepository } from "typeorm";
import Order from "../models/Order";

interface RequestDTO {
  id: string;
}

export default class DeleteOrderService {
  public async execute({
    id
  }: RequestDTO): Promise<void> {
    const orderRepository = getRepository(Order);

    await orderRepository.delete({ id });
  }
}
