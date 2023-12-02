import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../pages/login/loginSlice';
export const store = configureStore({
  reducer: {
    login: loginSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch