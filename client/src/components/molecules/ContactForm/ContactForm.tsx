import { Box, Button, TextField } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { StyledForm } from './ContactForm.styles';

export const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <StyledForm component='form'>
      <TextField
        label={t('contact.form.name')}
        variant='standard'
        fullWidth
        required
      />

      <TextField
        label={t('contact.form.email')}
        variant='standard'
        type='email'
        fullWidth
        required
      />

      <TextField
        label={t('contact.form.message')}
        variant='standard'
        multiline
        rows={4}
        fullWidth
        required
      />

      <Button type='submit' fullWidth variant='contained'>
        {t('contact.form.button.send')}
      </Button>
    </StyledForm>
  );
};
