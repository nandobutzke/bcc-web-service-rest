import Product from '../models/Product';

interface CreateProductDTO {
    name: string;
    price: number;
    description: string;
}

export default class ProductsController {
    private products: Product[];

    constructor() {
        this.products = [];
    }

    public all(): Product[] {
        return this.products;
    }

    public create({ name, price, description }: CreateProductDTO): Product {
        const product = new Product({
            name,
            price,
            description
        });

        this.products.push(product);

        return product;
    }
}
