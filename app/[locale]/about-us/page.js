import Link from "next/link";
import initTranslations from "../../utils/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import Navbar from "@/components/Navbar";

const i18Namespaces = ["about-us", "common"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18Namespaces);
  const pageTitle = t("common:about_us");

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18Namespaces}
    >
      <main>
        <Navbar pageTitle={pageTitle} />
        <div className="flex flex-col justify-center items-center text-center pt-52 md:pt-44 p-2 md:p-6">
          <h1>{t("common:about_us")}</h1>
          <p>
            <b>{t("our_address")}</b>
          </p>
          <p>
            123 Example Street
            <br />
            Los Angeles, CA
          </p>
          <Link className="text-blue-500" href="/">
            {t("back")}
          </Link>
        </div>
      </main>
    </TranslationsProvider>
  );
}
