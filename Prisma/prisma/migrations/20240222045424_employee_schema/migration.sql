/*
  Warnings:

  - Changed the type of `Employee_Code` on the `Employee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "Employee_Code",
ADD COLUMN     "Employee_Code" INTEGER NOT NULL;
