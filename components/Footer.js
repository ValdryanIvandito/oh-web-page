"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-800 text-slate-200 text-sm md:text-md">
      {/*-----FOOTER-XL-LG-MD-----*/}
      <div className="hidden md:block p-6">
        <div className="grid grid-cols-2 mb-3">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="text-left p-3">
              <p className="mb-4">Email : yayasanopenheaven@gmail.com</p>
              <p className="mb-1">WhatsApp : </p>
              <p className="mb-1">
                - Kevin Zefanya (General) : (+62) 851 5632 6343
              </p>
              <p className="mb-4">
                - Richard Hang (Netherlands) : (+31) 639 580 657
              </p>
              <p className="mb-1">
                {t("common:x1a")} : Yupi Nurlia Dewi S.H. M.Kn No. 5 A –{" "}
                {t("common:x1b")}
              </p>
              <p className="mb-1">
                {t("common:x2")} : AHU-0000500.AH.01.04.2023
              </p>
              <p className="mb-1">
                {t("common:x3")} : No. S-6871/KT/KPP.180203/2023
              </p>
              <p>{t("common:x4")} (NPWP) : 62.369.514.5-951.001</p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center py-3 pl-12">
            <div>
              <h1 className="font-bold text-xl lg:text-2xl decoration-white">
                OPEN HEAVEN FOUNDATION
              </h1>
              <div className="w-full h-1 bg-white mt-2"></div>
            </div>

            <div className="flex justify-center items-center mt-3 gap-4 mb-4">
              <Link
                href={process.env.NEXT_PUBLIC_LINK_INSTAGRAM_OH}
                target="_blank"
                className="flex justify-center items-center"
              >
                <Image
                  src="/icon-instagram.png"
                  alt="Instagram Icon"
                  width={28}
                  height={28}
                />
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_LINK_YOUTUBE_OH}
                target="_blank"
                className="flex justify-center items-center"
              >
                <Image
                  src="/icon-youtube.png"
                  alt="Youtube Icon"
                  width={28}
                  height={28}
                />
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_LINK_FACEBOOK_OH}
                target="_blank"
                className="flex justify-center items-center"
              >
                <Image
                  src="/icon-facebook.png"
                  alt="Instagram Icon"
                  width={28}
                  height={28}
                />
              </Link>
            </div>
            <Image
              src="/logo-oh.png"
              alt="Open Heaven Foundation Logo"
              width={120}
              height={120}
            />
          </div>
        </div>
        <p className="text-center font-bold">
          &copy; 2024 Open Heaven Foundation
        </p>
      </div>

      {/*-----NAVBAR-SM-----*/}
      <div className="block md:hidden p-6">
        <div className="grid grid-cols-2 mb-3">
          <div className="flex flex-col justify-center items-center p-3">
            <h1 className="font-bold text-lg decoration-white">
              OPEN HEAVEN FOUNDATION
            </h1>
            <div className="w-full h-1 bg-white mt-2"></div>
            <div className="flex justify-center items-center mt-3 gap-4">
              <Link
                href={process.env.NEXT_PUBLIC_LINK_INSTAGRAM_OH}
                target="_blank"
                className="flex justify-center items-center"
              >
                <Image
                  src="/icon-instagram.png"
                  alt="Instagram Icon"
                  width={28}
                  height={28}
                />
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_LINK_YOUTUBE_OH}
                target="_blank"
                className="flex justify-center items-center"
              >
                <Image
                  src="/icon-youtube.png"
                  alt="Youtube Icon"
                  width={28}
                  height={28}
                />
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_LINK_FACEBOOK_OH}
                target="_blank"
                className="flex justify-center items-center"
              >
                <Image
                  src="/icon-facebook.png"
                  alt="Instagram Icon"
                  width={28}
                  height={28}
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center ml-8">
            <Image
              src="/logo-oh.png"
              alt="Open Heaven Foundation Logo"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="text-center text-xs">
          <p className="mb-4">Email : yayasanopenheaven@gmail.com</p>
          <p className="mb-1">WhatsApp : </p>
          <p className="mb-1">
            - Kevin Zefanya (General) : (+62) 851 5632 6343
          </p>
          <p className="mb-4">
            - Richard Hang (Netherlands) : (+31) 639 580 657
          </p>
          <p className="mb-1">
            {t("common:x1a")} : Yupi Nurlia Dewi S.H. M.Kn No. 5 A –{" "}
            {t("common:x1b")}
          </p>
          <p className="mb-1">{t("common:x2")} : AHU-0000500.AH.01.04.2023</p>
          <p className="mb-1">
            {t("common:x3")} : No. S-6871/KT/KPP.180203/2023
          </p>
          <p className="mb-6">{t("common:x4")} (NPWP): 62.369.514.5-951.001</p>
          <p className="font-bold">&copy; 2024 Open Heaven Foundation</p>
        </div>
      </div>
    </footer>
  );
}
