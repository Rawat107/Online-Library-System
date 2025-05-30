import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'

const App = () => {
  return (
    <div className='bg-amber-50 min-h-screen text-amber-900'>
      <Navbar/>
      <main className='p-4 max-w-7xl mx-auto'>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
