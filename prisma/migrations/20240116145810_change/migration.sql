/*
  Warnings:

  - Added the required column `coverImage` to the `News` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "News" ADD COLUMN     "coverImage" TEXT NOT NULL;
