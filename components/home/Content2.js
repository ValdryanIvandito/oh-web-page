"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import SimpleVideoPlayer from "../SimpleVideoPlayer";

export default function Content2() {
  const { t } = useTranslation();

  return (
    <>
      {/*-----XL-LG-MD-----*/}
      <div
        className="hidden md:block relative bg-cover bg-center h-200 lg:h-225"
        style={{ backgroundImage: "url('/bg-children.webp')" }}
      >
        <div className="absolute inset-0 bg-white text-white bg-opacity-50 flex flex-col items-center justify-center px-16 lg:px-28">
          <div className="flex">
            <div className="bg-purple-600 flex flex-col text-left justify-center items-start w-1/3 lg:w-1/2 p-3 lg:p-8">
              <p className="text-2xl lg:text-4xl font-bold mb-2">{t("t5")}</p>
              <p className="text-2xl lg:text-4xl font-bold">{t("t6")}</p>
            </div>
            <div className="bg-purple-500 flex justify-start items-center w-2/3 lg:w-1/2 p-2">
              <SimpleVideoPlayer src="/kkr-sorong.mp4" type="video/mp4" />
            </div>
          </div>
          <div className="grid grid-cols-3 w-full">
            <div className="bg-purple-800 flex flex-col text-left justify-between items-start p-4 lg:p-6">
              <div>
                <p className="text-xl lg:text-3xl font-bold">{t("t8")}</p>
                <p className="text-xl lg:text-3xl font-bold">{t("t9")}</p>
                <p className="text-xl lg:text-3xl font-bold mb-2">
                  12:00 PM UTC
                </p>
                <p className="text-md lg:text-xl font-bold mb-8">{t("t10")}</p>
              </div>

              <Link
                href={process.env.NEXT_PUBLIC_LINK_WA_JOIN_COMMUNITY}
                target="_blank"
                className="border-2 border-white font-semibold rounded-xl text-md lg:text-lg text-white py-1 px-3 shadow-2xl hover:bg-slate-800 hover:text-white hover:font-bold hover:border-slate-600"
              >
                {t("common:button_join_us")}
              </Link>
            </div>
            <div className=" bg-purple-600 flex flex-col text-left justify-between items-start p-4 lg:p-6">
              <div>
                <p className="text-xl lg:text-3xl font-bold">{t("t8")}</p>
                <p className="text-xl lg:text-3xl font-bold">{t("t11")}</p>
                <p className="text-xl lg:text-3xl font-bold mb-2">
                  12:00 PM UTC
                </p>
                <p className="text-md lg:text-xl font-bold mb-8">{t("t12")}</p>
              </div>
              <Link
                href={process.env.NEXT_PUBLIC_LINK_WA_JOIN_COMMUNITY}
                target="_blank"
                className="border-2 border-white font-semibold rounded-xl text-md lg:text-lg text-white py-1 px-3 shadow-2xl hover:bg-slate-800 hover:text-white hover:font-bold hover:border-slate-600"
              >
                {t("common:button_join_us")}
              </Link>
            </div>
            <div className=" bg-purple-400 flex flex-col text-left justify-between items-start p-4 lg:p-6">
              <div>
                <p className="text-xl lg:text-3xl font-bold">{t("t15")}</p>
                <p className="text-xl lg:text-3xl font-bold mb-2">{t("t16")}</p>
                <p className="text-md lg:text-xl font-bold mb-8">{t("t17")}</p>
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
          <div className="bg-orange-600 w-full flex flex-col justify-between items-start p-4 lg:p-6">
            <div>
              <p className="text-xl lg:text-3xl font-bold mb-2">{t("t13")}</p>
              <p className="text-md lg:text-xl font-bold mb-8">{t("t14")}</p>
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

      {/*-----SM-----*/}
      <div
        className="block md:hidden relative bg-cover bg-center h-200"
        style={{ backgroundImage: "url('/bg-children.webp')" }}
      >
        <div className="absolute inset-0 bg-white text-white bg-opacity-50 flex flex-col items-center justify-center px-6">
          <div>
            <div className=" bg-purple-600 flex flex-col text-left justify-center items-start p-3 lg:p-8 w-full">
              <p className="text-lg font-bold">{t("t5")}</p>
              <p className="text-lg font-bold">{t("t6")}</p>
            </div>
            <div className=" bg-purple-500 flex justify-start items-center p-2">
              <SimpleVideoPlayer src="/kkr-sorong.mp4" type="video/mp4" />
            </div>
          </div>
          <div className="grid grid-cols-2 w-full">
            <div className=" bg-purple-800 flex flex-col text-left justify-between items-start p-4 lg:p-8">
              <div>
                <p className="text-md font-bold">{t("t8")}</p>
                <p className="text-md font-bold">{t("t9")}</p>
                <p className="text-md font-bold mb-1">12:00 PM UTC</p>
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
                <p className="text-md font-bold">{t("t11")}</p>
                <p className="text-md font-bold mb-1">12:00 PM UTC</p>
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
    </>
  );
}
