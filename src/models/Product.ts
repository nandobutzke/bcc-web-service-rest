import { uuid } from 'uuidv4'

export default class Product {
    id: string;

    name: string;

    price: number;

    description: string;

    constructor({ name, price, description }: Omit<Product, 'id'>) {
        this.id = uuid();
        this.name = name;
        this.price = price;
        this.description = description;
    }
}
