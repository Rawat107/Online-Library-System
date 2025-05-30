import { Link } from "react-router-dom";
import { Star } from "lucide-react";


const BookCard = ({ book }) => {
    return (
        <div className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={book.coverImage} alt={book.title} className="w-full h-85 object-contain rounded m-1" />
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-1 text-amber-800">{book.title}</h2>
                <p className="text-sm text-amber-70">By {book.author}</p>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{book.description}</p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="flex items-center gap-2 text-sm text-yellow-600 font-medium"> <Star className="w-4 h-4"/>{book.rating} </span>
                    <Link to={`/book/${book.id}`}
                        className="text-sm text-amber-600 font-medium hover:underline cursor-grabbing"
                    >
                        View Details
                    </Link>

                </div>
            </div>

        </div>

    )
} 

export default BookCard