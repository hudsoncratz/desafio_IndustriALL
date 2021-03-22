import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOccurrences1616322417935 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'occurrences',
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
                    name: 'title',
                    type: 'varchar',
                },
                {
                    name: 'initDate',
                    type: 'varchar',
                },
                {
                    name: 'endDate',
                    type: 'varchar',
                },
                
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('occurrences')
    }

}


