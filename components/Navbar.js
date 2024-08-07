/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageChanger from "@/components/LanguageChanger";
import { useTranslation } from "react-i18next";

const bibleEducationLink = process.env.NEXT_PUBLIC_LINK_BIBLE_EDUCATION;
const donationLink = process.env.NEXT_PUBLIC_LINK_DONATION;

export default function Navbar({ pageTitle }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    // { href: "/", label: t("common:home") },
    { href: "/about-us", label: t("common:about_us") },
    { href: "/", label: t("common:ministry") },
    { href: "/", label: t("common:mission") },
    { href: bibleEducationLink, label: t("common:education") },
    { href: donationLink, label: t("common:support_us") },
    { href: "/", label: t("common:contact_us") },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event) => {
    // Check whether the click was made outside the dropdown element
    if (isOpen && !event.target.closest(".account-option")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add an event listener when the component is first rendered
    document.addEventListener("click", closeDropdown);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [isOpen]);

  return (
    <>
      {/*-----NAVBAR-XL-LG-MD-----*/}
      <div className="hidden md:block bg-slate-800 bg-opacity-75 py-6 px-12 w-full fixed">
        <div className="flex justify-between items-center">
          <Link href={"/"} className="flex justify-center items-center">
            <Image
              src="/logo-oh.png"
              alt="Open Heaven Foundation Logo"
              width={100}
              height={100}
            />
          </Link>
          <div className="hidden lg:flex justify-center items-center gap-8">
            <ul className="mx-auto text-slate-300 font-bold">
              <div className="hidden lg:flex justify-center items-center gap-8">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`${
                        pageTitle === link.label
                          ? "text-white"
                          : "hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </div>
            </ul>
          </div>
          <div>
            <LanguageChanger />
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
        </div>
        <div className="lg:hidden flex justify-center items-center gap-8 mt-2">
          <ul className="mx-auto text-sm text-slate-300 font-bold">
            <div className="lg:hidden flex justify-center items-center gap-8">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`${
                      pageTitle === link.label
                        ? "text-white"
                        : "hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>

      {/*-----NAVBAR-SM-----*/}
      <div className="block md:hidden bg-slate-800 bg-opacity-75 text-white font-bold py-4 px-6 w-full fixed">
        <div className="flex justify-center items-center mt-3 gap-4">
          <Link href={"/"} className="flex justify-center items-center">
            <Image
              src="/logo-oh.png"
              alt="Open Heaven Foundation Logo"
              width={100}
              height={100}
            />
          </Link>
          <Link
            href={process.env.NEXT_PUBLIC_LINK_INSTAGRAM_OH}
            target="_blank"
            className="flex justify-center items-center"
          >
            <Image
              src="/icon-instagram.png"
              alt="Instagram Icon"
              width={32}
              height={32}
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
              width={32}
              height={32}
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
              width={32}
              height={32}
            />
          </Link>
          <div className="flex justify-center items-center">
            <LanguageChanger />
          </div>
          <div className="flex justify-center items-center">
            <div className="relative inline-block text-center mt-1.5">
              <div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center focus:outline-none focus:ring focus:border-blue-900"
                  onClick={toggleDropdown}
                >
                  <Image
                    src="/icon-3strip.png"
                    alt="3strip Icon"
                    width={48}
                    height={48}
                  />
                </button>
              </div>
              {isOpen && (
                <div className="w-32 origin-top-right absolute right-0 mt-2 rounded-xl shadow-xl bg-blue-950 text-slate-500 ring-1 ring-black ring-opacity-5">
                  <ul className="mx-auto text-sm text-slate-300 font-bold">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className={`${
                            pageTitle === link.label
                              ? "text-white"
                              : "hover:text-white"
                          } block px-3 py-3 text-sm`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
