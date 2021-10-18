import { Router } from "express";

import { getRepository } from "typeorm";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import Order from "../models/Order";
import CreateOrderService from "../services/CreateOrderService";
import DeleteOrderService from "../services/DeleteOrderService";

const ordersRouter = Router();

ordersRouter.use(ensureAuthenticated);

ordersRouter.get("/", async (request, response) => {
  const ordersRepository = getRepository(Order);

  const orders = await ordersRepository.find();

  return response.json(orders);
});

ordersRouter.post("/", async (request, response) => {
  try {
    const { user_id } = request.body;

    const createOrder = new CreateOrderService();

    const order = await createOrder.execute({
      user_id,
    });

    return response.json(order);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

ordersRouter.get("/:id", async (request, response) => {
  const { id } = request.params;

  const ordersRepository = getRepository(Order);

  const order = await ordersRepository.findOne({
    where: { id },
  });

  return response.json(order);
});

ordersRouter.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const orderDelete = new DeleteOrderService;

    await orderDelete.execute({
      id
    });

    return response.json(`the product with ${id} has been deleted.`);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default ordersRouter;
