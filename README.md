## BookNest

**BookNest** is a modern, responsive online library system built with React, Redux, and Tailwind CSS. It allows users to browse books by category, view book details, and manage a collection of books with a clean UI.

---

### 🌐 Live Demo

🔗 **[View Live on Render](https://online-library-system-4tzj.onrender.com)**

---

### Features

- Browse books by categories
- View detailed information about each book
- Search books by title or author
- Add new books (demo purpose)
- Fully responsive and accessible design
- 404 page for invalid routes
- Fast development setup using **Vite**

---

### Tech Stack

- React (with Vite)
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Lucide Icons

---

### Project Structure

```
src/
│
├── components/       # Reusable components like BookCard, SearchBar
├── pages/            # Route-level pages (Home, BrowseBook, BookDetails, NotFound)
├── redux/            # Redux store and slices
├── utils/            # Static data like categories
├── App.jsx           # Root component with layout
├── main.jsx          # Entry point with router setup
└── index.css         # Tailwind CSS and custom variables
```

---

### Requirements

- Node.js (v16+ recommended)
- npm or yarn

---

### Getting Started

Follow these steps to run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/Rawat107/Online-Library-System.git
cd Online-library-system

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

This will start the app at `http://localhost:5173` (or the port Vite assigns).

---

### Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

### Notes

- All routes not matching a valid path will be redirected to the 404 page.
- Category routes and book IDs are validated against the Redux store.
- Icons used from **Lucide React**.
- No backend; data is stored in Redux only.

---

### Author

- **Vaibhav Rawat**
- GitHub: [@Rawat107](https://github.com/Rawat107)
