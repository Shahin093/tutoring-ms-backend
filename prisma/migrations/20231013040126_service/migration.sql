/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "UserEnrolledServiceStatus" AS ENUM ('ONGOING', 'COMPLETED', 'WITHDRAWN');

-- CreateEnum
CREATE TYPE "ServiceSchedule" AS ENUM ('MORNING_2_4', 'AFTERNOON_4_6', 'EVENING_6_8');

-- CreateEnum
CREATE TYPE "ServiceCategory" AS ENUM ('MONTHLY', 'YOURLY', 'THREE_MONTH', 'SIX_MONTH');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL DEFAULT 'shahin123',
    "role" TEXT NOT NULL DEFAULT 'user',
    "contactNo" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "profileImg" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "services" (
    "id" TEXT NOT NULL,
    "serviceName" TEXT NOT NULL,
    "serviceCode" INTEGER NOT NULL,
    "service_image" TEXT NOT NULL,
    "category" "ServiceCategory" NOT NULL,
    "schedule" "ServiceSchedule" NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "per_course_students" INTEGER DEFAULT 0,
    "location" TEXT NOT NULL,
    "serviceAuthor" TEXT NOT NULL,
    "acceptable_students" INTEGER DEFAULT 20,
    "status" "UserEnrolledServiceStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
