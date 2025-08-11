-- CreateTable
CREATE TABLE "Tarefa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Subtarefa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tarefa_Id" INTEGER NOT NULL,
    CONSTRAINT "Subtarefa_tarefa_Id_fkey" FOREIGN KEY ("tarefa_Id") REFERENCES "Tarefa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
