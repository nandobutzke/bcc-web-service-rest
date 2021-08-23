import { uuid } from 'uuidv4'

class Product {
    id: string;

    name: string;

    description: string;

    constructor(name: string, description: string) {
        this.id = uuid();
        this.name = name;
        this.description = description;
    }
}

export default Product;