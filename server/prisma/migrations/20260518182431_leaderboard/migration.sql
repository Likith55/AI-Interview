/*
  Warnings:

  - The primary key for the `Interview` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Interview` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `userName` to the `Interview` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Interview" DROP CONSTRAINT "Interview_pkey",
ADD COLUMN     "userName" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "communicationScore" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "confidenceScore" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "overallScore" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "strengths" SET DATA TYPE TEXT,
ALTER COLUMN "suggestions" SET DATA TYPE TEXT,
ALTER COLUMN "technicalScore" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "weaknesses" SET DATA TYPE TEXT,
ADD CONSTRAINT "Interview_pkey" PRIMARY KEY ("id");
