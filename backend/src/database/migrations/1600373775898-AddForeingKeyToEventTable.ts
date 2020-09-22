import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddForeingKeyToEventTable1600373775898 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('events', new TableColumn({
            name: 'user_id',
            type: 'uuid',
            //  ESTRATEGIA DE CASCADE
            isNullable: true, // botamos true para caso um dia o usuario seja apagado, nao se perca os logs das consultas que ele teve

        }));
        //Especificamos a foreign key
        await queryRunner.createForeignKey('events', new TableForeignKey({
            name: 'EventProvider', // Define um nome para o foreign key
            columnNames: ['user_id'], // coluna da tabela appointments que vai ser uma foreign key
            referencedColumnNames: ['id'], // coluna que referencia a foreing key
            referencedTableName: 'users', // tabela que referencia a foreign key
            onDelete: 'SET NULL', // Isso vai setar null o campo caso o usuario seja deletado
            onUpdate: 'CASCADE', // Isso caso o id seja alterado, vai alterar o id em todos os relacionamentos feitos.
        }));
    }
    // metodo down reverte tudo que foi feito no metodo up
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('events', 'EventProvider'); // Deleta a foreign key
        await queryRunner.dropColumn('events', 'user_id');
    }

}