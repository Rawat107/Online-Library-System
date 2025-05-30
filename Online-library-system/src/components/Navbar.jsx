import { NavLink } from "react-router-dom";
import { BookOpen } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/books", label: "Browse Books" },
  { to: "/add-book", label: "Add Book" },
];

const Navbar = () => {
  return (
    <nav className="bg-[var(--color-primary)] shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-[var(--color-primary-text)] tracking-wide">
          <BookOpen className="w-8 h-8 text-[var(--color-active)]" />
          BookNest
        </h1>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? 'bg-[var(--color-active)] text-white px-4 py-2 rounded-full font-medium shadow-sm transition'
                  : 'bg-[var(--color-primary-light)] text-[var(--color-primary-text)] hover:bg-[var(--color-primary-hover)] px-4 py-2 rounded-full font-medium shadow-sm transition'
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;