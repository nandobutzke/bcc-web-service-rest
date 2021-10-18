import { getRepository } from "typeorm";
import OrderDetails from "../models/OrderDetails";

interface RequestDTO {
  order_id: string;
  product_id: string;
  amount: number;
  total: number;
}

export default class CreateOrderDetailsService {
  public async execute({
    order_id,
    product_id,
    amount,
    total,
  }: RequestDTO): Promise<OrderDetails> {
    const ordersDetailsRepository = getRepository(OrderDetails);

    const orderDetails = ordersDetailsRepository.create({
      order_id,
      product_id,
      amount,
      total,
    });

    await ordersDetailsRepository.save(orderDetails);

    return orderDetails;
  }
}
