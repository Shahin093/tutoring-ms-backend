/*
  Warnings:

  - Added the required column `amount` to the `userPayments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transactionId` to the `userPayments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `userPayments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "userPayments" ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "paymentGatewayData" JSONB,
ADD COLUMN     "transactionId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
