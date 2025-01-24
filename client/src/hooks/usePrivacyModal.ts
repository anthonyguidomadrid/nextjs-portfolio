import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { closePrivacyModal, openPrivacyModal } from '~/slices';

export const usePrivacyModal = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state: RootState) => state.privacyModal.isOpen);

  const openModal = () => {
    dispatch(openPrivacyModal());
  };

  const closeModal = () => {
    dispatch(closePrivacyModal());
  };

  return {
    isOpen,
    openModal,
    closeModal,
  };
};
