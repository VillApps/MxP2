import { configureStore } from '@reduxjs/toolkit';
import UiReducer from './UiSlice';

export const store = configureStore({
  reducer: {
    Ui: UiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
