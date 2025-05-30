import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PlusCircle } from "lucide-react";
import { addBook } from "../redux/booksSlice";
import categories from "../utils/categories";

const AddBook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: '',
        author: '',
        publishDate: '',
        pages: '',
        rating: '',
        coverImage: '',
        description: '',
        category: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setForm(prev => ({ ...prev, coverImage: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (
            !form.title || !form.author || !form.publishDate || !form.pages ||
            !form.rating || !form.coverImage || !form.description || !form.category
        ) {
            setError("All fields are required.");
            return;
        }

        const newBook = {
            ...form,
            id: Date.now(),
            pages: parseInt(form.pages),
            rating: parseFloat(form.rating),
        };

        dispatch(addBook(newBook));
        navigate('/books');
    };

    return (
        <section className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded mt-8">
            <h2 className="flex items-center gap-2 text-2xl font-semibold mb-6 text-[var(--color-primary-text)]">
                <PlusCircle className="w-6 h-6 text-[var(--color-active)]" />
                Add a New Book
            </h2>

            {error && <p className="mb-4 text-red-600">{error}</p>}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                    type="text"
                    name="title"
                    placeholder="Book Title"
                    className="border p-3 rounded"
                    value={form.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="author"
                    placeholder="Author"
                    className="border p-3 rounded"
                    value={form.author}
                    onChange={handleChange}
                />
                <input
                    type="date"
                    name="publishDate"
                    className="border p-3 rounded"
                    value={form.publishDate}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="pages"
                    placeholder="Pages"
                    className="border p-3 rounded"
                    value={form.pages}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    step="0.1"
                    name="rating"
                    placeholder="Rating (0–5)"
                    className="border p-3 rounded"
                    value={form.rating}
                    onChange={handleChange}
                />

                {/* Category Dropdown */}
                <select
                    name="category"
                    className="border p-3 rounded"
                    value={form.category}
                    onChange={handleChange}
                >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                        <option key={cat.name} value={cat.name}>
                            {cat.name}
                        </option>
                    ))}
                </select>

                {/* Cover Image: URL or Upload */}
                <div className="col-span-1 md:col-span-2 space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Cover Image (URL or Upload)
                    </label>
                    <input
                        type="url"
                        name="coverImage"
                        placeholder="Enter an image URL"
                        className="border p-3 rounded w-full"
                        value={form.coverImage}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="file-upload"
                        className="inline-block bg-[var(--color-primary-hover)] text-white font-semibold py-2 px-4 rounded cursor-pointer hover:bg-[var(--color-hover-state)] transition"
                    >
                        Choose File
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                    />
                    {form.coverImage && (
                        <img
                            src={form.coverImage}
                            alt="Preview"
                            className="mt-2 max-h-48 rounded shadow"
                        />
                    )}
                </div>

                {/* Description */}
                <textarea
                    name="description"
                    placeholder="Description"
                    className="border p-3 rounded col-span-1 md:col-span-2"
                    rows={4}
                    value={form.description}
                    onChange={handleChange}
                ></textarea>

                <button
                    type="submit"
                    className="bg-[var(--color-primary-hover)] hover:bg-[var(--color-hover-state)] text-white px-6 py-3 rounded font-semibold col-span-1 md:col-span-2 transition"
                >
                    Add Book
                </button>
            </form>
        </section>
    );
};

export default AddBook;
