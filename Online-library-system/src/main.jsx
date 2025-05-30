import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import bookStore from './redux/store.js'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'

// component and pages
import App from './App.jsx'
import Home from './pages/Home.jsx'
import BrowseBook from './pages/BrowseBooks.jsx'
import BookDetails from './pages/BookDetails.jsx'
import AddBook from './pages/AddBook.jsx'
import NotFound from './pages/NotFound.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index:true, element: <Home/>},
      { path:'books', element: <BrowseBook/>},
      { path:'books/:category', element: <BrowseBook/> },
      { path:'book/:id', element: <BookDetails/> },
      { path: 'add-book', element: <AddBook/> }
    ],
    errorElement: <NotFound />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={bookStore}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
