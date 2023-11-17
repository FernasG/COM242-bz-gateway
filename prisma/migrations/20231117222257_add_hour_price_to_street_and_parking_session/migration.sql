/*
  Warnings:

  - Added the required column `hour_price` to the `parking_sessions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "parking_sessions" ADD COLUMN     "hour_price" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "streets" ADD COLUMN     "hour_price" DOUBLE PRECISION NOT NULL DEFAULT 3;
