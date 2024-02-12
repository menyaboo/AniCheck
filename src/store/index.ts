import { configureStore } from '@reduxjs/toolkit'
import {animeApi} from "../services/animeApi";

export const store = configureStore({
  reducer: {
    [animeApi.reducerPath]: animeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(animeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch