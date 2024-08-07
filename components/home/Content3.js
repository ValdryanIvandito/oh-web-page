"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Content3() {
  const { t } = useTranslation();

  return (
    <div className="bg-white flex flex-col justify-center items-center p-6 md:px-32 md:py-12">
      <div className="flex justify-center items-center mb-12">
        <Image src="/icon-give.png" alt="Give Icon" width={75} height={75} />
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
  );
}
