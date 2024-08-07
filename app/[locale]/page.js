/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import Link from "next/link";
import Image from "next/image";
import initTranslations from "../utils/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const i18Namespaces = ["home", "common"];

// const registration =
//   "https://docs.google.com/forms/d/e/1FAIpQLSf1qTplup4L1mh8Mlv8Edrtmb6WsfKv3qpgs-_oO-sQAngx_Q/viewform";

// const waPsKevin = "https://api.whatsapp.com/send/?phone=6285156326343";
// const waPsDaniel = "https://api.whatsapp.com/send/?phone=6282218075558";

// const mapCabangBali =
//   "https://www.google.com/maps/@-8.684978,115.191756,3a,75y,135.64h,82.39t/data=!3m7!1e1!3m5!1stshoeXzlFXy9Y7ZocBveTg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DtshoeXzlFXy9Y7ZocBveTg%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D135.636870919836%26pitch%3D7.613171239176609%26thumbfov%3D90!7i16384!8i8192?coh=205410&entry=ttu";
// const mapCabangPapua =
//   "https://www.google.com/maps/@-0.9016933,131.3164105,52m/data=!3m1!1e3?entry=ttu";

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

        <div>
          <img
            src="/bg-people-hands.png"
            alt="People Hands Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <img
            src="/bg-the-earth.png"
            alt="The Earth Background"
            className="absolute inset-0 w-full h-full object-cover opacity-45"
          />
          <div className="relative z-10">
            <Navbar pageTitle={pageTitle} />
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-col justify-center font-bold text-left text-white pt-52 md:pt-72 p-6 md:p-16">
            <h1 className="text-xl mb-10 md:text-4xl md:mb-20">
              {t("welcome")}
            </h1>
            <h1 className="text-4xl mb-3 md:text-6xl md:mb-4">FOUNDATION</h1>
            <h1 className="text-6xl md:text-8xl">OPEN HEAVEN</h1>
            <div className="w-full h-1 bg-white mt-3 md:mt-4"></div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white md:flex md:justify-center md:items-start gap-4 p-6 md:py-12 md:pl-16">
            <div className="md:flex md:justify-end md:items-end mb-2 md:mb-0">
              <p className="font-extrabold text-xl md:text-3xl md:w-80">
                {t("t1")}
              </p>
            </div>
            <div className="md:w-3/5 lg:ml-4">
              <p className="text-slate-500 text-lg mb-2 leading-relaxed">
                {t("t2")}
              </p>
              <Link
                href="/about-us"
                className="text-orange-500 hover:font-bold"
              >
                {t("common:read_more")}
              </Link>
            </div>
          </div>
        </div>

        {/*-----CONTENT-XL-LG-MD-----*/}
        <div
          className="hidden md:block relative bg-cover bg-center h-200"
          style={{ backgroundImage: "url('/bg-children.webp')" }}
        >
          <div className="absolute inset-0 bg-white text-white bg-opacity-50 flex flex-col items-center justify-center px-28">
            <div className="grid grid-cols-2 w-full">
              <div className=" bg-purple-600 flex flex-col text-left justify-center items-start p-3 lg:p-8">
                <p className="text-2xl lg:text-4xl font-bold mb-2">{t("t5")}</p>
                <p className="text-2xl lg:text-4xl font-bold">{t("t6")}</p>
              </div>
              <div className=" bg-purple-500 flex justify-start items-center py-2 pl-2 pr-12">
                <video
                  autoPlay
                  muted
                  loop
                  style={{ width: "100%", height: "auto" }}
                >
                  <source src="/kkr-sorong.mp4" type="video/mp4" />
                  {t("t7")}
                </video>
              </div>
            </div>
            <div className="grid grid-cols-3 w-full">
              <div className=" bg-purple-800 flex flex-col text-left justify-between items-start p-4 lg:p-8">
                <div>
                  <p className="text-xl lg:text-3xl font-bold">{t("t8")}</p>
                  <p className="text-xl lg:text-3xl font-bold mb-2">
                    {t("t9")}
                  </p>
                  <p className="text-md lg:text-xl font-bold mb-14">
                    {t("t10")}
                  </p>
                </div>

                <Link
                  href={process.env.NEXT_PUBLIC_LINK_WA_JOIN_COMMUNITY}
                  target="_blank"
                  className="border-2 border-white font-semibold rounded-xl text-md lg:text-lg text-white py-1 px-3 shadow-2xl hover:bg-slate-800 hover:text-white hover:font-bold hover:border-slate-600"
                >
                  {t("common:button_join_us")}
                </Link>
              </div>
              <div className=" bg-purple-600 flex flex-col text-left justify-between items-start p-4 lg:p-8">
                <div>
                  <p className="text-xl lg:text-3xl font-bold">{t("t8")}</p>
                  <p className="text-xl lg:text-3xl font-bold mb-2">
                    {t("t11")}
                  </p>
                  <p className="text-md lg:text-xl font-bold mb-14">
                    {t("t12")}
                  </p>
                </div>
                <Link
                  href={process.env.NEXT_PUBLIC_LINK_WA_JOIN_COMMUNITY}
                  target="_blank"
                  className="border-2 border-white font-semibold rounded-xl text-md lg:text-lg text-white py-1 px-3 shadow-2xl hover:bg-slate-800 hover:text-white hover:font-bold hover:border-slate-600"
                >
                  {t("common:button_join_us")}
                </Link>
              </div>
              <div className=" bg-purple-400 flex flex-col text-left justify-between items-start p-4 lg:p-8">
                <div>
                  <p className="text-xl lg:text-3xl font-bold">{t("t15")}</p>
                  <p className="text-xl lg:text-3xl font-bold mb-2">
                    {t("t16")}
                  </p>
                  <p className="text-md lg:text-xl font-bold mb-14">
                    {t("t17")}
                  </p>
                </div>
                <Link
                  href={process.env.NEXT_PUBLIC_LINK_BIBLE_EDUCATION}
                  target="_blank"
                  className="border-2 border-white font-semibold rounded-xl text-md lg:text-lg text-white py-1 px-3 shadow-2xl hover:bg-slate-800 hover:text-white hover:font-bold hover:border-slate-600"
                >
                  {t("common:button_join_us")}
                </Link>
              </div>
            </div>
            <div className="bg-orange-600 w-full flex flex-col justify-between items-start p-4 lg:p-8">
              <div>
                <p className="text-xl lg:text-3xl font-bold mb-2">{t("t13")}</p>
                <p className="text-md lg:text-xl font-bold mb-14">{t("t14")}</p>
              </div>
              <Link
                href={process.env.NEXT_PUBLIC_LINK_YOUTUBE_OH}
                target="_blank"
                className="border-2 border-white font-semibold rounded-xl text-md lg:text-lg text-white py-1 px-3 shadow-2xl hover:bg-slate-800 hover:text-white hover:font-bold hover:border-slate-600"
              >
                {t("common:button_watch_now")}
              </Link>
            </div>
          </div>
        </div>

        {/*-----NAVBAR-SM-----*/}
        <div
          className="block md:hidden relative bg-cover bg-center h-200"
          style={{ backgroundImage: "url('/bg-children.webp')" }}
        >
          <div className="absolute inset-0 bg-white text-white bg-opacity-50 flex flex-col items-center justify-center px-10">
            <div className=" bg-purple-600 flex flex-col text-left justify-center items-start p-3 lg:p-8 w-full">
              <p className="text-lg font-bold">{t("t5")}</p>
              <p className="text-lg font-bold">{t("t6")}</p>
            </div>
            <div className=" bg-purple-500 flex justify-start items-center py-2 pl-2 pr-10">
              <video
                autoPlay
                muted
                loop
                style={{ width: "100%", height: "auto" }}
              >
                <source src="/kkr-sorong.mp4" type="video/mp4" />
                {t("t7")}
              </video>
            </div>
            <div className="grid grid-cols-2 w-full">
              <div className=" bg-purple-800 flex flex-col text-left justify-between items-start p-4 lg:p-8">
                <div>
                  <p className="text-md font-bold">{t("t8")}</p>
                  <p className="text-md font-bold mb-1">{t("t9")}</p>
                  <p className="text-xs font-bold mb-8">{t("t10")}</p>
                </div>

                <Link
                  href={process.env.NEXT_PUBLIC_LINK_WA_JOIN_COMMUNITY}
                  target="_blank"
                  className="border-2 border-white font-semibold rounded-xl text-xs lg:text-lg text-white py-1 px-3 shadow-2xl hover:bg-slate-800 hover:text-white hover:font-bold hover:border-slate-600"
                >
                  {t("common:button_join_us")}
                </Link>
              </div>
              <div className=" bg-purple-600 flex flex-col text-left justify-between items-start p-4 lg:p-8">
                <div>
                  <p className="text-md font-bold">{t("t8")}</p>
                  <p className="text-md font-bold mb-1">{t("t11")}</p>
                  <p className="text-xs font-bold mb-8">{t("t12")}</p>
                </div>
                <Link
                  href={process.env.NEXT_PUBLIC_LINK_WA_JOIN_COMMUNITY}
                  target="_blank"
                  className="border-2 border-white font-semibold rounded-xl text-xs lg:text-lg text-white py-1 px-3 shadow-2xl hover:bg-slate-800 hover:text-white hover:font-bold hover:border-slate-600"
                >
                  {t("common:button_join_us")}
                </Link>
              </div>
              <div className="bg-orange-600 w-full flex flex-col justify-between items-start p-4 lg:p-8">
                <div>
                  <p className="text-md font-bold mb-1">{t("t13")}</p>
                  <p className="text-xs font-bold">{t("t14")}</p>
                </div>

                <Link
                  href={process.env.NEXT_PUBLIC_LINK_YOUTUBE_OH}
                  target="_blank"
                  className="border-2 border-white font-semibold rounded-xl text-xs text-white py-1 px-3 shadow-2xl hover:bg-slate-800 hover:text-white hover:font-bold hover:border-slate-600"
                >
                  {t("common:button_watch_now")}
                </Link>
              </div>
              <div className=" bg-purple-400 flex flex-col text-left justify-between items-start p-4 lg:p-8">
                <div>
                  <p className="text-md font-bold">{t("t15")}</p>
                  <p className="text-md font-bold mb-1">{t("t16")}</p>
                  <p className="text-xs font-bold mb-8">{t("t17")}</p>
                </div>
                <Link
                  href={process.env.NEXT_PUBLIC_LINK_BIBLE_EDUCATION}
                  target="_blank"
                  className="border-2 border-white font-semibold rounded-xl text-xs lg:text-lg text-white py-1 px-3 shadow-2xl hover:bg-slate-800 hover:text-white hover:font-bold hover:border-slate-600"
                >
                  {t("common:button_join_us")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white flex flex-col justify-center items-center p-6 md:px-32 md:py-12">
            <div className="flex justify-center items-center mb-12">
              <Image
                src="/icon-give.png"
                alt="Give Icon"
                width={75}
                height={75}
              />
            </div>
            <p className="font-semibold text-lg md:text-xl text-slate-500 text-center leading-relaxed mb-2">
              {t("t3")}
            </p>
            <p className="font-bold text-xl md:text-2xl text-slate-500 text-center mb-12">
              {t("t4")}
            </p>
            <Link
              href={process.env.NEXT_PUBLIC_LINK_DONATION}
              target="_blank"
              className="border-2 border-slate-600 font-semibold rounded-xl text-lg text-slate-500 py-1 px-3 shadow-2xl hover:bg-slate-600 hover:text-white hover:font-bold hover:border-slate-600"
            >
              {t("common:button_support_us")}
            </Link>
          </div>
        </div>

        <div className="relative">
          <Footer />
        </div>
      </main>
    </TranslationsProvider>
  );
}
