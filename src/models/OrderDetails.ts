import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToMany,
    OneToOne,
    OneToMany,
    ManyToOne,
} from 'typeorm';

import Product from './Product';
import Order from './Order';

@Entity('order_details')
export default class OrderDetails {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    order_id: string;

    @OneToOne(() => Order)
    @JoinColumn({ name: 'order_id' })
    order: Order;

    @Column()
    product_id: string;

    @ManyToOne(() => Product)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @Column()
    amount: number;

    @Column()
    total: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
