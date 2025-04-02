import { getBooks } from "@/lib/actions";
import Books from "./books";

const Home = async () => {
  const books = await getBooks();

  return (
    <>
      <h1>Books</h1>
      <Books books={books} />
    </>
  );
};

export default Home;
