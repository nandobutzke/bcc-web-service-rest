import Product from '../models/Product';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Product)
export default class ProductsController extends Repository<Product> {
    
}
