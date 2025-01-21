import { createSlice } from '@reduxjs/toolkit';

interface PrivacyModalState {
  isOpen: boolean;
}

const initialState: PrivacyModalState = {
  isOpen: false,
};

export const privacyModalSlice = createSlice({
  name: 'privacyModal',
  initialState,
  reducers: {
    openPrivacyModal: (state) => {
      state.isOpen = true;
    },
    closePrivacyModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openPrivacyModal, closePrivacyModal } =
  privacyModalSlice.actions;

export default privacyModalSlice.reducer;
