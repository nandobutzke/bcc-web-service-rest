import ProductsController from '../controllers/ProductsController';
import Product from '../models/Product';

interface RequestDTO {
    name: string;
    price: number;
    description: string;
}

export default class CreateProductService {
    private productsController: ProductsController;
    
    constructor(productsController: ProductsController) {
        this.productsController = productsController;
    }
    
    public execute({ name, price, description }: RequestDTO): Product {
        const product = this.productsController.create({
            name,
            price,
            description
        });

        if (!name) { 
            throw Error('The product name is null!');
        }
        
        return product;
    }
}

