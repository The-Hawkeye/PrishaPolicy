/*
  Warnings:

  - You are about to drop the column `dob` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `relation` on the `Employee` table. All the data in the column will be lost.
  - Added the required column `Name` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Relation` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "dob",
DROP COLUMN "name",
DROP COLUMN "relation",
ADD COLUMN     "DOB" TIMESTAMP(3),
ADD COLUMN     "Name" TEXT NOT NULL,
ADD COLUMN     "Relation" "Relation" NOT NULL;
