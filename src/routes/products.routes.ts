import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';
import CreateProductService from '../services/CreateProductService';

import { getCustomRepository } from 'typeorm';

const productsRouter = Router();
const productsController = new ProductsController();


productsRouter.get('/', async (request, response) => {
    const productsController = getCustomRepository(ProductsController);

    const products = await productsController.find();
    	
    return response.json(products);
});

productsRouter.post('/', async (request, response) => {
    try {
        const { name, description, price, stock } = request.body;
        
        const createProduct = new CreateProductService();
    
        const product = await createProduct.execute({ 
            name, 
            description,
            stock,
            price
        });
        
        return response.json(product);
    } catch (err) {
        return response.status(400).json({ error: err });
    }
});

export default productsRouter;
