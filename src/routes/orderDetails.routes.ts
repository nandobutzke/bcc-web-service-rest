import { Router } from 'express';
import { getRepository } from 'typeorm';
import OrderDetails from '../models/OrderDetails';

import CreateOrderDetailsService from '../services/CreateOrderDetailsService';

const orderDetailsRouter = Router();

orderDetailsRouter.get('/', async (request, response) => {
    const orderDetailsController = getRepository(OrderDetails);

    const orderDetails = await orderDetailsController.find();
    	
    return response.json(orderDetails);
});

orderDetailsRouter.post('/', async (request, response) => {
    try {
        const { order_id, product_id, amount, total } = request.body;
        
        const createOrderDetails = new CreateOrderDetailsService();
    
        const orderDetails = await createOrderDetails.execute({
            order_id,
            product_id,
            amount,
            total
        });
        
        return response.json(orderDetails);
    } catch (err) {
        return response.status(400).json({ error: err });
    }
});

orderDetailsRouter.get('/:id', async (request, response) => {
    const { id } = request.params;

    const orderDetailsController = getRepository(OrderDetails);

    const orderDetails = await orderDetailsController.findOne({
        where: { id }
    });

    return response.json(orderDetails);
});

export default orderDetailsRouter;
