import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export default class AlterUserFieldToUserId1633386358771
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("orders", "user_id");
    await queryRunner.addColumn(
      "orders",
      new TableColumn({
        name: "user_id",
        type: "uuid",
        isNullable: false,
      })
    );

    await queryRunner.createForeignKey(
      "orders",
      new TableForeignKey({
        name: "UserOrderID",
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("orders", "UserOrderID");

    await queryRunner.dropColumn("orders", "user_id");

    await queryRunner.addColumn(
      "orders",
      new TableColumn({
        name: "user_id",
        type: "varchar",
      })
    );
  }
}
