import { Router } from 'express';
import { uuid } from 'uuidv4';
import Product from '../models/Product';
import ProductsRepository from '../repositories/ProductsRepository';

const productsRouter = Router();
const productsRepository = new ProductsRepository();

const products: Product[] = [];

productsRouter.get('/',  (request, response) => {
    const products = productsRepository.all();

    return response.json(products);
});

productsRouter.post('/', (request, response) => {
    const { name, description } = request.body;

    const product = productsRepository.create({
        name, 
        description
    });

    products.push(product);

    return response.json(product);
});

export default productsRouter;
