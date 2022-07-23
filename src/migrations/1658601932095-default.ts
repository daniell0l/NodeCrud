import { MigrationInterface, QueryRunner } from "typeorm";

export class default1658601932095 implements MigrationInterface {
    name = 'default1658601932095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Videos" DROP CONSTRAINT "PK_3cafd1e310bdf514e0d6a94df1a"`);
        await queryRunner.query(`ALTER TABLE "Videos" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "Videos" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Videos" ADD CONSTRAINT "PK_3cafd1e310bdf514e0d6a94df1a" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Videos" DROP CONSTRAINT "PK_3cafd1e310bdf514e0d6a94df1a"`);
        await queryRunner.query(`ALTER TABLE "Videos" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "Videos" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Videos" ADD CONSTRAINT "PK_3cafd1e310bdf514e0d6a94df1a" PRIMARY KEY ("id")`);
    }

}
