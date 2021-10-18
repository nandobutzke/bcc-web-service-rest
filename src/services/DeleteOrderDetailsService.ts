import { getRepository } from "typeorm";
import OrderDetails from "../models/OrderDetails";

interface RequestDTO {
  id: string;
}

export default class DeleteOrderDetailsService {
  public async execute({
    id
  }: RequestDTO): Promise<void> {
    const orderDetailsRepository = getRepository(OrderDetails);

    await orderDetailsRepository.delete({ id });
  }
}
