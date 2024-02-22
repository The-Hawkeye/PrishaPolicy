/*
  Warnings:

  - You are about to drop the column `age` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `empCode` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `sumInsured` on the `Employee` table. All the data in the column will be lost.
  - Added the required column `Employee_Code` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Gender` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "age",
DROP COLUMN "empCode",
DROP COLUMN "gender",
DROP COLUMN "sumInsured",
ADD COLUMN     "Age" INTEGER,
ADD COLUMN     "Date" TIMESTAMP(3),
ADD COLUMN     "Employee_Code" TEXT NOT NULL,
ADD COLUMN     "Gender" "Gender" NOT NULL,
ADD COLUMN     "Sum_Insured" DOUBLE PRECISION,
ALTER COLUMN "dob" DROP NOT NULL;
