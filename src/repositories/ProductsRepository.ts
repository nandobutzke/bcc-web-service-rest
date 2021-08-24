import Product from '../models/Product';

interface CreateProductDTO {
    name: string;
    description: string;
}

export default class ProductsRepository {
    private products: Product[];

    constructor() {
        this.products = [];
    }

    public all(): Product[] {
        return this.products;
    }

    public create({ name, description }: CreateProductDTO): Product {
        const product = new Product({
            name,
            description
        });

        this.products.push(product);

        return product;
    }
}
