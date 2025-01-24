import {
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Snackbar,
  TextField,
} from '@mui/material';
import { Trans, useTranslation } from 'next-i18next';
import {
  PrivacyPolicyButton,
  StyledAlert,
  StyledForm,
} from './ContactForm.styles';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useEmailService, usePrivacyModal } from '~/hooks';
import { DEFAULT_STATE } from './ContactForm.constants';

export const ContactForm = () => {
  const { t } = useTranslation();
  const { sendEmail, isLoading, isSuccess } = useEmailService();
  const [formData, setFormData] = useState(DEFAULT_STATE);
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const [isPrivacyPolicyChecked, setPrivacyPolicyChecked] = useState(false);
  const severity = isSuccess ? 'success' : 'error';
  const { openModal } = usePrivacyModal();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendEmail(formData);
    setFormData(DEFAULT_STATE);
    setSnackbarOpen(true);
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrivacyPolicyChecked(e.target.checked);
  };

  const handlePrivacyPolicyClick = () => openModal();

  const onSnackbarClose = () => setSnackbarOpen(false);

  return (
    <>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={onSnackbarClose}
      >
        <StyledAlert
          onClose={onSnackbarClose}
          severity={severity}
          variant='filled'
        >
          {t(`contact.form.${severity}`)}
        </StyledAlert>
      </Snackbar>
      <StyledForm onSubmit={handleSubmit}>
        <TextField
          name='name'
          label={t('contact.form.name')}
          variant='standard'
          fullWidth
          required
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          name='email'
          label={t('contact.form.email')}
          variant='standard'
          type='email'
          fullWidth
          required
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          name='message'
          label={t('contact.form.message')}
          variant='standard'
          multiline
          rows={4}
          fullWidth
          required
          value={formData.message}
          onChange={handleChange}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isPrivacyPolicyChecked}
              onChange={handleCheckboxChange}
              name='privacyPolicy'
              required
            />
          }
          label={
            <Trans
              i18nKey='contact.privacy-policy.checkbox'
              components={{
                button: (
                  <PrivacyPolicyButton onClick={handlePrivacyPolicyClick} />
                ),
              }}
            />
          }
        />
        <Button
          type='submit'
          fullWidth
          variant='outlined'
          disabled={isLoading}
          aria-label='Send'
        >
          {isLoading ? (
            <CircularProgress size={24} color='inherit' />
          ) : (
            t('contact.form.button.send')
          )}
        </Button>
      </StyledForm>
    </>
  );
};
