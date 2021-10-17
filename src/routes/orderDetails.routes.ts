import { Router } from "express";
import { getRepository } from "typeorm";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import OrderDetails from "../models/OrderDetails";

import CreateOrderDetailsService from "../services/CreateOrderDetailsService";
import DeleteOrderDetailsService from "../services/DeleteOrderDetailsService";
import UpdateOrderDetailsService from "../services/UpdateOrderDetailsService";

const orderDetailsRouter = Router();

orderDetailsRouter.use(ensureAuthenticated);

orderDetailsRouter.get("/", async (request, response) => {
  const orderDetailsController = getRepository(OrderDetails);

  const orderDetails = await orderDetailsController.find();

  return response.json(orderDetails);
});

orderDetailsRouter.post("/", async (request, response) => {
  try {
    const { order_id, product_id, amount, total } = request.body;

    const createOrderDetails = new CreateOrderDetailsService();

    const orderDetails = await createOrderDetails.execute({
      order_id,
      product_id,
      amount,
      total,
    });

    return response.json(orderDetails);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

orderDetailsRouter.get("/:id", async (request, response) => {
  const { id } = request.params;

  const orderDetailsController = getRepository(OrderDetails);

  const orderDetails = await orderDetailsController.findOne({
    where: { id },
  });

  return response.json(orderDetails);
});

orderDetailsRouter.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const {  product_id, amount, total } = request.body;

    const orderDetailsUpdate = new UpdateOrderDetailsService;

    await orderDetailsUpdate.execute({
      id,
      product_id,
      amount,
      total
    });

    return response.json(`the product with ${id} has been altered.`);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

orderDetailsRouter.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const orderDetailsDelete = new DeleteOrderDetailsService;

    await orderDetailsDelete.execute({
      id
    });

    return response.json(`the product with ${id} has been deleted.`);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default orderDetailsRouter;
