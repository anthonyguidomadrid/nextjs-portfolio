import { Box, Fade } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NotFound } from '~/components/templates';

const NotFoundPage: React.FC = () => (
  <Fade in={true}>
    <Box>
      <NotFound />
    </Box>
  </Fade>
);

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default NotFoundPage;
