// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import portfolioSlice from './slices/portfolioSlice';
import themeSlice from './slices/themeSlice';
import uiSlice from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    portfolio: portfolioSlice,
    theme: themeSlice,
    ui: uiSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;





