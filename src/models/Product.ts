import { uuid } from 'uuidv4'

export default class Product {
    id: string;

    name: string;

    description: string;

    constructor({ name, description }: Omit<Product, 'id'>) {
        this.id = uuid();
        this.name = name;
        this.description = description;
    }
}
