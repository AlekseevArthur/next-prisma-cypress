"use server";

import { PrismaClient } from "@prisma/client";

const { book } = new PrismaClient();

export const createBook = async (data) => {
  return await book.create({ data });
};

export const getBooks = async () => {
  return await book.findMany({});
};

export const deleteBook = async (id) => {
  return await book.delete({ where: { id } });
};
