-- CreateTable
CREATE TABLE
    "Book" (
        "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        "title" TEXT NOT NULL,
        "author" TEXT
    );

-- CreateIndex
CREATE UNIQUE INDEX "Book_title_key" ON "Book" ("title");