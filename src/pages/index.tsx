import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <h1>{t("home")}</h1>
      <p>Hello</p>
    </div>
  );
};

export default Home;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
