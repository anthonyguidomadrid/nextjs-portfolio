import { PrivacyPolicyModalProps } from './PrivacyPolicyModal.types';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  useMediaQuery,
} from '@mui/material';
import { usePrivacyModal } from '~/hooks';
import { useTranslation } from 'next-i18next';
import theme from '~/utils/theme';

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  content,
}) => {
  const { isOpen, closeModal } = usePrivacyModal();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      onClose={closeModal}
      open={isOpen}
      fullScreen={isMobile}
      TransitionComponent={Fade}
    >
      <DialogTitle>{t('contact.privacy-policy.title')}</DialogTitle>
      <DialogContent dividers>
        <BlocksRenderer content={content} />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={closeModal}>
          {t('contact.privacy-policy.button.close')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
