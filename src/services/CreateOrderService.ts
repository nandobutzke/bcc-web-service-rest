import { getRepository } from "typeorm";
import Order from "../models/Order";

interface RequestDTO {
  user_id: string;
}

export default class CreateOrderService {
  public async execute({ user_id }: RequestDTO): Promise<Order> {
    const ordersRepository = getRepository(Order);

    const order = ordersRepository.create({ user_id });

    await ordersRepository.save(order);

    return order;
  }
}
