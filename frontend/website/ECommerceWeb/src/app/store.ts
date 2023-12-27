import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../pages/login/loginSlice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, loginSlice);
export const store = configureStore({
  reducer: {
    login: persistedReducer
  },
})
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch