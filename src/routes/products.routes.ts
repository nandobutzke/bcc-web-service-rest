import { Router } from 'express';
import { uuid } from 'uuidv4';
import Product from '../models/Product';

const productsRouter = Router();

const products: Product[] = [];

productsRouter.post('/', (request, response) => {
    const { name, description } = request.body;

    const product = new Product(name, description);

    products.push(product);

    return response.json(product);
});

export default productsRouter;
