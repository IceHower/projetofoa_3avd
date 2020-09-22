import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddImageFieldToEvent1600717050538 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('events', new TableColumn({
            name: 'image',
            type: 'varchar',
            isNullable: true,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('events', 'image');
    }

}
