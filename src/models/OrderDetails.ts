import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToMany,
    OneToOne,
} from 'typeorm';

import Product from './Product';
import Order from './Order';

@Entity('orders')
export default class OrderDetails {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    product_id: string;

    @ManyToMany(() => Product)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @Column()
    order_id: string;

    @OneToOne(() => Order)
    @JoinColumn({ name: 'order_id' })
    order: Order;

    @Column()
    amount: number;

    @Column()
    total: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}