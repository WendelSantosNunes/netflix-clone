import Image from "next/image";
import imgLogo from "../../../public/assets/Logo.svg";
import imgBell from "../../../public/assets/bell.svg";
import imgSearch from "../../../public/assets/search.svg";
import Link from "next/link";

export function Header() {
  return (
    <div className="py-6 bg-gradient-to-b from-[#141414] to-blue-from-[#141414] ">
      <div className="m-auto max-w-screen-2xl flex justify-between">
        <nav className="flex items-center space-x-2">
          <Link href={"/"}>
            <Image src={imgLogo} alt="Picture of the author" />
          </Link>

          <ul className="flex space-x-5 text-white">
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
