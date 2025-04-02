"use client";

import { createBook, deleteBook } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Book = ({ book, destroy }) => {
  return (
    <li>
      <button onClick={destroy} children="X" />
      &nbsp;
      <b> Title: </b>
      {book.title},<b> Author: </b>
      {book.author}
    </li>
  );
};

const Books = ({ books }) => {
  const [title, setTitle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [error, setError] = useState(false);
  const { refresh } = useRouter();

  const create = async () => {
    try {
      await createBook({ title, author });
      setError(false);
      refresh();
    } catch (e) {
      setError(true);
    }
  };

  const destroy = async (id) => {
    await deleteBook(id);
    refresh();
  };

  return (
    <main>
      <div>
        <input onChange={(e) => setTitle(e.target.value)} name="title" />
        <label> Title </label>
      </div>
      <div>
        <input onChange={(e) => setAuthor(e.target.value)} name="author" />
        <label> Author </label>
      </div>
      <font color="red">{error && "Invalid data provided"}</font>
      <br />
      <button onClick={create}> Add new book </button>
      <ul>
        {books.map((book, i) => (
          <Book book={book} destroy={() => destroy(book.id)} key={i} />
        ))}
      </ul>
    </main>
  );
};

export default Books;
