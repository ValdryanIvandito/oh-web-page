/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import initTranslations from "../utils/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Content1 from "@/components/home/Content1";
import Welcome from "@/components/home/Welcome";
import Content2 from "@/components/home/Content2";
import Content3 from "@/components/home/Content3";
import BgImage from "@/components/home/BgImage";

const i18Namespaces = ["home", "common"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18Namespaces);
  const pageTitle = t("common:home");

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18Namespaces}
    >
      <main className="flex flex-col justify-between cursor-pointer">
        <Header
          title="OPEN HEAVEN FOUNDATION"
          name="description"
          content="Open Heaven Foundation"
        />

        <BgImage />

        <div className="relative z-10">
          <Navbar pageTitle={pageTitle} />
        </div>

        <div className="relative">
          <Welcome />
        </div>

        <div className="relative">
          <Content1 />
        </div>

        <div className="relative">
          <Content2 />
        </div>

        <div className="relative">
          <Content3 />
        </div>

        <div className="relative">
          <Footer />
        </div>
      </main>
    </TranslationsProvider>
  );
}
