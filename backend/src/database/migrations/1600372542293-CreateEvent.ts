import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEvent1600372542293 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'events',
            columns: [
                {
                    name: 'id', // Define o nome da coluna
                    type: 'uuid', // Define o tipo do dado da coluna
                    isPrimary: true, // Essa flag diz se a primary key ou não
                    generationStrategy: 'uuid', // Essa flag define o metodo de geração como uuid para o id
                    default: 'uuid_generate_v4()' // define a função para gerar o uuid v4
                },
                {
                    name: 'nome',
                    type: 'varchar',
                    isNullable: false, // Essa flag diz se o valor pode ser nulo ou não
                },
                {
                    name: 'local',
                    type: 'varchar', // Esse tipo só tem no postgres, fala que o tipo é timestamps e ainda pega o fuso horario.
                    isNullable: false // Essa flag diz se o valor pode ser nulo ou não
                },
                {
                    name: 'comentario',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'likes',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'dislikes',
                    type: 'int',
                    isNullable: false
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
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('events');
    }

}
