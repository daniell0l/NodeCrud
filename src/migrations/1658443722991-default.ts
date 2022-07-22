import { MigrationInterface, QueryRunner } from "typeorm";

export class default1658443722991 implements MigrationInterface {
    name = 'default1658443722991'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Videos" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "duration" integer NOT NULL, "category_id" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3cafd1e310bdf514e0d6a94df1a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Videos" ADD CONSTRAINT "FK_c28871ef7994d15618bd7c7c50e" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Videos" DROP CONSTRAINT "FK_c28871ef7994d15618bd7c7c50e"`);
        await queryRunner.query(`DROP TABLE "Videos"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
