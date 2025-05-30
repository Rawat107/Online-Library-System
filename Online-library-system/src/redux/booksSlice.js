import {createSlice} from '@reduxjs/toolkit'
import Books from '../utils/books'


const savedBooks = localStorage.getItem('books');
const initialState = savedBooks ? JSON.parse(savedBooks) : Books;

const  bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) =>{
            state.push({id: Date.now().toString(), ...action.payload})
            localStorage.setItem('books', JSON.stringify(state))
        },
    }
});

export const {addBook, deleteBook} = bookSlice.actions

export default bookSlice.reducer