import { Router } from "express";
import CreateProductService from "../services/CreateProductService";

import { getRepository } from "typeorm";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import Product from "../models/Product";
import UpdateProductService from "../services/UpdateProductService";
import DeleteProductService from "../services/DeleteProductService";

const productsRouter = Router();

productsRouter.use(ensureAuthenticated);

productsRouter.get("/", async (request, response) => {
  const productsController = getRepository(Product);

  const products = await productsController.find();

  return response.json(products);
});

productsRouter.post("/", async (request, response) => {
  try {
    const { name, description, price, stock } = request.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      name,
      description,
      stock,
      price,
    });

    return response.json(product);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});



productsRouter.get("/:id", async (request, response) => {
  const { id } = request.params;

  const productsController = getRepository(Product);

  const product = await productsController.findOne({
    where: { id },
  });

  return response.json(product);
});

productsRouter.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const { name, description, price, stock } = request.body;

    const productsUpdate = new UpdateProductService;

    await productsUpdate.execute({
      id,
      name,
      description,
      price,
      stock
    });

    return response.json(`the product with ${id} has been altered.`);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

productsRouter.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const productsUpdate = new DeleteProductService;

    await productsUpdate.execute({
      id
    });

    return response.json(`the product with ${id} has been deleted.`);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default productsRouter;
