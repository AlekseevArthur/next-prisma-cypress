const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createTestBook = async ({
  title = "Death Note",
  author = "unknown",
} = {}) => {
  return await prisma.book.create({
    data: { title, author },
  });
};

module.exports = createTestBook;
