import { PageTitle } from '~/components/organisms';
import { BackHomeButton } from './NotFound.styles';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export const NotFound: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const handleGoHome = () => {
    router.push('/');
  };
  return (
    <PageTitle
      Title={t('not-found.title')}
      subTitle={t('not-found.subtitle')}
      isMainTitle={true}
    >
      <BackHomeButton variant='outlined' onClick={handleGoHome}>
        {t('not-found.button.back-home')}
      </BackHomeButton>
    </PageTitle>
  );
};
