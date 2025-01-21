import { configureStore } from '@reduxjs/toolkit';
import counter from '~/slices/counter';
import privacyModal from '~/slices/privacyModal';

export const store = configureStore({
  reducer: {
    counter,
    privacyModal,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
