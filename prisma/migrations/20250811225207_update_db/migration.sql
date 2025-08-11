/*
  Warnings:

  - You are about to drop the column `descricao` on the `Subtarefa` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Subtarefa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "concluida" BOOLEAN NOT NULL DEFAULT false,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tarefa_Id" INTEGER NOT NULL,
    CONSTRAINT "Subtarefa_tarefa_Id_fkey" FOREIGN KEY ("tarefa_Id") REFERENCES "Tarefa" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Subtarefa" ("dataCriacao", "id", "tarefa_Id", "titulo") SELECT "dataCriacao", "id", "tarefa_Id", "titulo" FROM "Subtarefa";
DROP TABLE "Subtarefa";
ALTER TABLE "new_Subtarefa" RENAME TO "Subtarefa";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
