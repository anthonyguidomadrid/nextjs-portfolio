import { useState } from 'react';
import { PrivacyPolicyModalProps } from './PrivacyPolicyModal.types';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { usePrivacyModal } from '~/hooks';

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  content,
}) => {
  const { isOpen, closeModal } = usePrivacyModal();
  return (
    <Dialog
      onClose={closeModal}
      aria-labelledby='customized-dialog-title'
      open={isOpen}
    >
      <DialogTitle>Privacy Policy</DialogTitle>
      <IconButton
        aria-label='close'
        onClick={closeModal}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <BlocksRenderer content={content} />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={closeModal}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
