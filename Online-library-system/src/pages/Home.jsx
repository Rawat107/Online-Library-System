import BookCard from '../components/BookCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BookOpen, Star } from 'lucide-react'
import categories from '../utils/categories';
import NotFound from './NotFound';

const Home = () => {

    const books = useSelector((state) => state.books);
    const popularBooks = books.filter((book) => book.rating >= 4.5);

    return (
        <div className='space-y-12'>
            {/* Welcome Message */ }
            <header className='text-center mt-8'>
                <h1 className='text-4xl font-bold text-[var(--color-primary-text)] mb-4'>
                        Welcome to BookNest
                </h1>
                <p className='text-lg text-[var(--color-active)]'>Discover a place full of books and knowledge</p>
            </header>

            {/* Categories */}
            <section>
                <h2 className='text-2xl font-semibold mb-4 text-[var(--color-hover)] text-center sm:text-left'>
                    Browse by Category
                </h2>

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                    {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                        <Link
                        to={`/books/${category.name}`}
                        key={category.name}
                        className='flex flex-col items-center justify-center text-center px-4 py-3 bg-[var(--color-primary-light)] text-[var(--color-primary-text)] rounded hover:bg-[var(--color-primary-hover)] transition'
                        >
                        <Icon className="w-5 h-5 mb-1" />
                        <span className="text-sm font-medium">{category.name}</span>
                        </Link>
                    );
                    })}
                </div>
            </section>



            {/* Populary Books */}
            <section>
                <h2 className=' flex items-center gap-2 text-2xl font-semibold mb-4 py-1 px-2 bg-[var(--color-hover)]'>
                        <Star className="w-6 h-6 text-[var(--color-hover-state)]" />
                        <span className='text-[var(--color-primary-light)]'>
                            Popular Books
                        </span>
                    
                </h2>
                <div className='grid sm:grid-cols-2 lg-grid-cols-3 gap-6'>
                    {popularBooks.map((book) => (
                        <BookCard key={book.id} book={book}/>
                    ) )}
                </div>
            </section>
        </div>
    )
}

export default Home;