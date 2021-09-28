import { getCustomRepository } from 'typeorm';

import ProductsController from '../controllers/ProductsController';
import Product from '../models/Product';

interface RequestDTO {
    name: string;
    description: string;
    stock: number;
    price: number;
}

export default class CreateProductService {
    public async execute({ name, description, stock, price }: RequestDTO): Promise<Product> {
        const productsController = getCustomRepository(ProductsController);

        const product = productsController.create({
            name,
            description,
            stock,
            price
        });

        await productsController.save(product);

        if (!name) { 
            throw Error('The product name is null!');
        }
        
        return product;
    }
}

