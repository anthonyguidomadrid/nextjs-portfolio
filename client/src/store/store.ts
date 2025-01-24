import { configureStore } from '@reduxjs/toolkit';
import privacyModal from '~/slices/privacyModal';

export const store = configureStore({
  reducer: {
    privacyModal,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
