"use client";

import { useTranslation } from "react-i18next";

export default function Welcome() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center font-bold text-left text-white pt-52 md:pt-72 p-6 md:p-16">
      <h1 className="text-xl mb-10 md:text-4xl md:mb-20">{t("welcome")}</h1>
      <h1 className="text-4xl mb-3 md:text-6xl md:mb-4">FOUNDATION</h1>
      <h1 className="text-6xl md:text-8xl">OPEN HEAVEN</h1>
      <div className="w-full h-1 bg-white mt-3 md:mt-4"></div>
    </div>
  );
}
