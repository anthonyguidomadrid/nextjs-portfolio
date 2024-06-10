import { CustomButton } from '~/components';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import Link from 'next/link';
import createApolloClient from '~/lib/client';
import { GETQUERY } from '~/query/schema';
import { HomeProps } from './index.props';

const Home: React.FC<HomeProps> = ({ todos: { data } }) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <div>
      <h1>{t('home')}</h1>
      <p>Hello</p>
      <select value={locale} onChange={changeLanguage}>
        <option value='en'>English</option>
        <option value='es'>Español</option>
      </select>
      <div>
        <CustomButton labelText='HEllo' />
      </div>
      <div>
        <Link href={'/about'}>About</Link>
      </div>
      <ul>
        {data.map(({ attributes }, index) => (
          <li key={index}>{attributes.todoText}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const client = createApolloClient();
  const {
    data: { todos },
  } = await client.query({
    query: GETQUERY,
  });
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      todos,
    },
  };
}

export default Home;
