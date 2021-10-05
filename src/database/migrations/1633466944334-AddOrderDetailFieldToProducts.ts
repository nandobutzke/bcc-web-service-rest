import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddOrderDetailFieldToProducts1633466944334 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('products', new TableColumn({
            name: 'order_details_id',
            type: 'uuid',
            isNullable: false
        })
        );
    
        await queryRunner.createForeignKey('products', new TableForeignKey({
            name: 'OrderDetailID',
            columnNames: ['order_details_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'order_details',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
        );
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('products', 'OrderDetailID');

        await queryRunner.dropColumn('products', 'order_details_id');
    }

}
