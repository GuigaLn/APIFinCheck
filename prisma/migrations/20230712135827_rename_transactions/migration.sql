/*
  Warnings:

  - Changed the type of `type` on the `categories` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "transaction_type" AS ENUM ('INCOME', 'EXPENSE');

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "type",
ADD COLUMN     "type" "transaction_type" NOT NULL;

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "type",
ADD COLUMN     "type" "transaction_type" NOT NULL;

-- DropEnum
DROP TYPE "TransactionType";
