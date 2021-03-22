import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createEvents1616329272266 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "events",
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'eventDescription',
                    type: 'varchar',
                },
                {
                    name: 'occurrenceId',
                    type: 'integer',
                }
            ],
            foreignKeys: [
                {
                    name: 'eventOccurrence',
                    columnNames: ['occurrenceId'],
                    referencedTableName: 'occurrences',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('events');
    }

}
