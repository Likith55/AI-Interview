/*
  Warnings:

  - You are about to drop the column `feedback` on the `Interview` table. All the data in the column will be lost.
  - You are about to drop the column `score` on the `Interview` table. All the data in the column will be lost.
  - Added the required column `communicationScore` to the `Interview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `confidenceScore` to the `Interview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finalFeedback` to the `Interview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `overallScore` to the `Interview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `strengths` to the `Interview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suggestions` to the `Interview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `technicalScore` to the `Interview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weaknesses` to the `Interview` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Interview" DROP COLUMN "feedback",
DROP COLUMN "score",
ADD COLUMN     "communicationScore" INTEGER NOT NULL,
ADD COLUMN     "confidenceScore" INTEGER NOT NULL,
ADD COLUMN     "finalFeedback" TEXT NOT NULL,
ADD COLUMN     "overallScore" INTEGER NOT NULL,
ADD COLUMN     "strengths" JSONB NOT NULL,
ADD COLUMN     "suggestions" JSONB NOT NULL,
ADD COLUMN     "technicalScore" INTEGER NOT NULL,
ADD COLUMN     "weaknesses" JSONB NOT NULL;
