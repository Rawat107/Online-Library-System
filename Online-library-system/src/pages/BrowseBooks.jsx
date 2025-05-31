import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import { Book } from "lucide-react";
import { useState, useMemo } from "react";
import NotFound from "./NotFound";
import categories from "../utils/categories";

const BrowseBook = () => {
  const { category } = useParams();
  const allBooks = useSelector((state) => state.books);
  const [searchQuery, setSearchQuery] = useState("");

  // Check for valid category
  const isValidCategory = useMemo(() => {
    if (!category) return true;
    return categories.some(
      (c) => c.name.toLowerCase() === category.toLowerCase()
    );
  }, [category]);

  // Show NotFound if invalid category
  if (!isValidCategory) {
    return <NotFound />;
  }

  // Filter by category
  const byCategory = useMemo(() => {
    if (!category) return allBooks;
    return allBooks.filter(
      (book) => book.category.toLowerCase() === category.toLowerCase()
    );
  }, [allBooks, category]);

  // Filter by search query
  const filteredBooks = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return byCategory;
    return byCategory.filter(
      (book) =>
        book.title.toLowerCase().includes(q) ||
        book.author.toLowerCase().includes(q)
    );
  }, [byCategory, searchQuery]);

  const selectedCategory = categories.find(
    (cat) => cat.name.toLowerCase() === category?.toLowerCase()
    );

   const CategoryIcon = selectedCategory?.icon || Book;

  return (
    <div className="space-y-8">
      <header className="flex items-center gap-2">
        <CategoryIcon className="w-6 h-6 text-[var(--color0-active)]" />
        <h1 className="text-3xl font-semibold text-[var(--color-primary-text)]">
          {category ? `${category} Books` : "All Books"}
        </h1>
      </header>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {filteredBooks.length > 0 ? (
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </section>
      ) : (
        <p className="text-lg text-[var(--color-active)]">
          No books found matching your criteria
        </p>
      )}

      <Link
        to="/"
        className="block mt-10 text-center text-white bg-[var(--color-hover)] hover:bg-[var(--color-primary-hover)] px-6 py-2 rounded-md w-max mx-auto transition"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default BrowseBook;