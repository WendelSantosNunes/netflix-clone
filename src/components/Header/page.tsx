"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import imgLogo from "../../../public/assets/Logo.svg";
import imgBell from "../../../public/assets/bell.svg";
import imgSearch from "../../../public/assets/search.svg";
import { MenuMobile } from "./components/MenuMobile/page";

export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom z-50 py-6 ${
        scrolling
          ? "bg-black"
          : "bg-gradient-to-b from-[#141414] to-blue-from-[#141414]"
      }`}
    >
      <div className="m-auto max-w-screen-2xl flex justify-between">
        <nav className="flex items-center space-x-2">
          <Link href={"/"}>
            <Image src={imgLogo} alt="Picture of the author" />
          </Link>

          <MenuMobile
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
          />

          <ul className="flex space-x-5 text-white max-md:invisible max-md:opacity-0 max-md:hidden">
            <li className="font-bold cursor-pointer">Programas</li>
            <li className="hover:font-bold cursor-pointer">Filmes</li>
            <li className="hover:font-bold cursor-pointer">Séries</li>
            <li className="hover:font-bold cursor-pointer">Minha lista</li>
          </ul>
        </nav>

        <div className="flex items-center space-x-6">
          <Image
            src={imgSearch}
            alt="Picture of the author"
            className="cursor-pointer"
          />
          <Image
            src={imgBell}
            alt="Picture of the author"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
