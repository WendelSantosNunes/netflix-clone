import Image from "next/image";
import imgLogo from "../../../public/assets/Logo.svg";
import imgBell from "../../../public/assets/bell.svg";
import imgSearch from "../../../public/assets/search.svg";

export function Header() {
  return (
    <div className="py-4 bg-gradient-to-b from-[#141414] to-blue-from-[#141414] ">
      <div className="m-auto max-w-screen-2xl flex justify-between">
        <nav className="flex items-center space-x-2">
          <Image src={imgLogo} alt="Picture of the author" />

          <ul className="flex space-x-5 text-white">
            <li className="font-bold">Start</li>
            <li className="hover:font-bold cursor-pointer">Shows</li>
            <li className="hover:font-bold cursor-pointer">Movies</li>
            <li className="hover:font-bold cursor-pointer">New</li>
            <li className="hover:font-bold cursor-pointer">My list</li>
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
