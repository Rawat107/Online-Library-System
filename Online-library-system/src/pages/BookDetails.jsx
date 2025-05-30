import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowLeft, Star } from "lucide-react";

const BookDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const book = useSelector((state) => 
        state.books.find((book) => book.id === parseInt(id))
    )

    if (!book) {
        return (
            <section className="text-center mt-10">
                <p className="text-xl text-[var(--color-active)]">Book not found.</p>
                <button
                    onClick={() => navigate('/books')}
                    className="mt-4 px-4 py-2 bg-[var(--color-primary-light)] text-[var(--color-active)] rounded hover:bg-[var(--color-primary-hover)] transition"
                >
                    Go back to Browse
                </button>
            </section>
        )
    }
    return (
        <section className="max-w-4xl mx-auto p-6 space-x-6 bg-[var(--color-primary)] rounded-md shadow-md">
            
            {/* Title + Author */}
            <div>
                <h1 className="text-3xl font-bold text-[var(--color-primary-text)] mb-2">
                    {book.title}
                </h1>
                <p className="text-lg text-[var(--color-active)]">by {book.author}</p>              
            </div>

            {/* Cover + Info */}
            <div className="flex flex-col md:flex-row gap-6">
                <img src={book.coverImage} alt={book.title} 
                    className="w-64 h-auto rounded shadow"
                />

                <div className="flex flex-col justify-between space-y-4">
                    {/* Description */}
                    <p className="text-[var(--color-hover)]">
                        {book.description}
                    </p>

                    {/* Book Info*/}
                    <div className="text-sm text-[var(--color-hover)] space-y-1">
                        <p>Published: {book.publishDate}</p>
                        <p>Pages: {book.pages}</p>
                        <p className="flex items-center gap-2">
                            Rating: {book.rating}
                            <Star className="w-4 h-4 text-[var(--color-hover-state)]"/>
                        </p>
                    </div>

                    {/* Back button */}
                    <button 
                        onClick={() => navigate('/books')}
                        className="flex items-center gap-2 w-fit px-4 py-2 mt-4 rounded bg-[var(--color-primary-hover)] text-[var(--color-primary-text)] hover:bg-[var(--color-hover)] cursor-pointer transition"
                    >
                        <ArrowLeft className="w-4 h-4"/>
                        Back to Browse
                    </button>
                </div>
            </div>
        </section>
    );
};


export default BookDetails;