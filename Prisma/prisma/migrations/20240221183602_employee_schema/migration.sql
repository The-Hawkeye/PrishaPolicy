-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('M', 'F');

-- CreateEnum
CREATE TYPE "Relation" AS ENUM ('Self', 'Spouse', 'Mother', 'Father', 'Son', 'Daughter');

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "empCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "relation" "Relation" NOT NULL,
    "gender" "Gender" NOT NULL,
    "age" INTEGER NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "sumInsured" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);
