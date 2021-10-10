import { getRepository } from "typeorm";
import Order from "../models/Order";

interface RequestDTO {
    user_id: string
}

export default class CreateOrderService {
    public async execute({ user_id }: RequestDTO): Promise<Order> {
        const ordersController = getRepository(Order);

        const order = ordersController.create({ user_id, });
        
        await ordersController.save(order);

        return order;
    }
}