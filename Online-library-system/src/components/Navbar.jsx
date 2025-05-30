import { isAction } from "@reduxjs/toolkit"
import { NavLink } from "react-router-dom"
import { BookOpen } from "lucide-react"


const Navbar = () => {
  return (
    <nav className="bg-[var(--color-primary)] shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-[var(--color-primary-text)] tracking-wide">
          <BookOpen className="w-8 h-8 text-[var(--color-active)]" />

          BookNest
        </h1>
        
        <div className="space-x-6">
          <NavLink 
            to='/' 
            className={({ isActive }) => 
              isActive 
                ? 'text-[var(--color-active)] font-semibold underline' 
                : 'text-[var(--color-hover)] hover:text-[var(--color-hover-state)]'
            }
          >
            Home
          </NavLink>
          
          <NavLink 
            to='/books' 
            className={({ isActive }) => 
              isActive 
                ? 'text-[var(--color-active)] font-semibold underline' 
                : 'text-[var(--color-hover)] hover:text-[var(--color-hover-state)]'
            }
          >
            Browse Books
          </NavLink>
          
          <NavLink 
            to='/add-book' 
            className={({ isActive }) =>
              isActive 
                ? 'text-[var(--color-active)] font-semibold underline' 
                : 'text-[var(--color-hover)] hover:text-[var(--color-hover-state)]'
            }
          >
            Add Book
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar