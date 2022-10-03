import { configureStore } from '@reduxjs/toolkit'
import  isLoggedinReducers from '../features/login/loginslice'



export const store = configureStore({
  reducer: isLoggedinReducers,
})

