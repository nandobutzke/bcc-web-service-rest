import { Router } from 'express';
import { uuid } from 'uuidv4';
import Product from '../models/Product';
import ProductsController from '../controllers/ProductsController';
import CreateProductService from '../services/CreateProductService';

const productsRouter = Router();
const productsController = new ProductsController();


productsRouter.get('/',  (request, response) => {
    const products = productsController.all();
    	
    return response.json(products);
});

productsRouter.post('/', (request, response) => {
    try {
        const { name, price, description } = request.body;
    
        const createProduct = new CreateProductService(productsController);
    
        const product = createProduct.execute({ 
            name, 
            price, 
            description 
        });
        
        return response.json(product);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default productsRouter;
