import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CreateOrderDetails1633388780429 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'order_details',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'product_id',
                        type: 'uuid',
                    },
                    {
                        name: 'order_id',
                        type: 'uuid',
                    },
                    {
                        name: 'amount',
                        type: 'int',
                    },
                    {
                        name: 'total',
                        type: 'float',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ]
            })
        );

        await queryRunner.createForeignKey('order_details', new TableForeignKey({
            name: 'OrderID',
            columnNames: ['id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'orders',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
        );

        await queryRunner.createForeignKey('order_details', new TableForeignKey({
            name: 'ProductID',
            columnNames: ['id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'products',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('orders', 'OrderID');
        await queryRunner.dropForeignKey('products', 'ProductID');

        await queryRunner.dropTable('order_details');
    }

}
