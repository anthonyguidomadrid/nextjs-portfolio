import { FooterTypography } from './Footer.styles';
import packageJson from '../../../../package.json';
import { useTranslation } from 'next-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <FooterTypography variant='caption'>
        {t('footer.copyright', {
          year: new Date().getFullYear(),
          siteName: packageJson.siteName,
        })}
      </FooterTypography>
    </footer>
  );
};
