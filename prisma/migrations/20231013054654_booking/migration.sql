-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('PENDING', 'COMPLETED');

-- CreateEnum
CREATE TYPE "StudentType" AS ENUM ('NORMAL_STUDENT', 'SHOOLE', 'COLLEGE', 'UNIVERCITY');

-- CreateTable
CREATE TABLE "bookings" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "serviceid" TEXT NOT NULL,
    "category" "ServiceCategory" NOT NULL,
    "schedule" "ServiceSchedule" NOT NULL,
    "status" "BookingStatus" NOT NULL DEFAULT 'PENDING',
    "student_type" "StudentType" NOT NULL DEFAULT 'NORMAL_STUDENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_serviceid_fkey" FOREIGN KEY ("serviceid") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
