"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Content1() {
  const { t } = useTranslation();

  return (
    <div className="bg-white md:flex md:justify-center md:items-start gap-4 p-6 md:py-12 md:pl-16">
      <div className="md:flex md:justify-end md:items-end mb-2 md:mb-0">
        <p className="font-extrabold text-xl md:text-3xl md:w-80">{t("t1")}</p>
      </div>
      <div className="md:w-3/5 lg:ml-4">
        <p className="text-slate-500 text-lg mb-2 leading-relaxed">{t("t2")}</p>
        <Link href="/about-us" className="text-orange-500 hover:font-bold">
          {t("common:read_more")}
        </Link>
      </div>
    </div>
  );
}
