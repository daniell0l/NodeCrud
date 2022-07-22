import { MigrationInterface, QueryRunner } from "typeorm";

export class default1658525066140 implements MigrationInterface {
    name = 'default1658525066140'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Videos" DROP CONSTRAINT "FK_c28871ef7994d15618bd7c7c50e"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "Videos" DROP CONSTRAINT "PK_3cafd1e310bdf514e0d6a94df1a"`);
        await queryRunner.query(`ALTER TABLE "Videos" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "Videos" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Videos" ADD CONSTRAINT "PK_3cafd1e310bdf514e0d6a94df1a" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "Videos" DROP COLUMN "category_id"`);
        await queryRunner.query(`ALTER TABLE "Videos" ADD "category_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Videos" ADD CONSTRAINT "FK_c28871ef7994d15618bd7c7c50e" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Videos" DROP CONSTRAINT "FK_c28871ef7994d15618bd7c7c50e"`);
        await queryRunner.query(`ALTER TABLE "Videos" DROP COLUMN "category_id"`);
        await queryRunner.query(`ALTER TABLE "Videos" ADD "category_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Videos" DROP CONSTRAINT "PK_3cafd1e310bdf514e0d6a94df1a"`);
        await queryRunner.query(`ALTER TABLE "Videos" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "Videos" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Videos" ADD CONSTRAINT "PK_3cafd1e310bdf514e0d6a94df1a" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "Videos" ADD CONSTRAINT "FK_c28871ef7994d15618bd7c7c50e" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
