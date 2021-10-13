import { getRepository } from "typeorm";
import OrderDetails from "../models/OrderDetails";

interface RequestDTO {
  id: string;
}

export default class DeleteOrderDetailsService {
  public async execute({
    id
  }: RequestDTO): Promise<void> {
    const orderDetailsController = getRepository(OrderDetails);

    await orderDetailsController.delete({ id });
  }
}
