import { useState } from 'react';
import emailjs from 'emailjs-com';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const useEmailService = () => {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);

  const sendEmail = async (formData: FormData) => {
    setLoading(true);
    setSuccess(false);
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      await emailjs.send(serviceId, templateId, formData, publicKey);

      setSuccess(true);
    } catch (error) {
      console.error('Failed to send email:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, isLoading, isSuccess, isError };
};
