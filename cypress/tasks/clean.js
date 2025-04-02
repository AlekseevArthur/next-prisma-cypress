const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const clean = async () => {
  return await prisma.book.deleteMany({});
};

module.exports = clean;
