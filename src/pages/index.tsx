import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { ChangeEvent, ChangeEventHandler } from "react";

const Home = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <div>
      <h1>{t("home")}</h1>
      <p>Hello</p>
      <select value={locale} onChange={changeLanguage}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
}

export default Home;
