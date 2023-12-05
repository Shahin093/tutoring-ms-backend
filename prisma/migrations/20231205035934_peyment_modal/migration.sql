-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PARTIAL_PAID', 'FULL_PAID');

-- CreateTable
CREATE TABLE "userPayments" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "serviceid" TEXT NOT NULL,
    "fullPaymentAmount" INTEGER DEFAULT 0,
    "partialPaymentAmount" INTEGER DEFAULT 0,
    "totalDueAmount" INTEGER DEFAULT 0,
    "totalPaidAmount" INTEGER DEFAULT 0,
    "paymentStatus" "PaymentStatus" DEFAULT 'PENDING',

    CONSTRAINT "userPayments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "userPayments" ADD CONSTRAINT "userPayments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userPayments" ADD CONSTRAINT "userPayments_serviceid_fkey" FOREIGN KEY ("serviceid") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
