import { getRepository } from "typeorm";
import OrderDetails from "../models/OrderDetails";

interface RequestDTO {
    order_id: string;
    product_id: string;
    amount: number;
    total: number;
}

export default class CreateOrderDetailsService {
    public async execute({ order_id, product_id, amount, total }: RequestDTO): Promise<OrderDetails> {
        const ordersDetailsController = getRepository(OrderDetails);

        const orderDetails = ordersDetailsController.create({
            order_id,
            product_id,
            amount,
            total
        });
        
        await ordersDetailsController.save(orderDetails);

        return orderDetails;
    }
}