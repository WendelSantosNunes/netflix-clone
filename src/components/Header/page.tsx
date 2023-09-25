import Image from "next/image";
import imgLogo from "../../../public/assets/Logo.svg";
import imgBell from "../../../public/assets/bell.svg";
import imgSearch from "../../../public/assets/search.svg";

export function Header() {
  return (
    <div className="py-4 flex justify-between">
      <nav className="flex space-x-2">
        <Image src={imgLogo} alt="Picture of the author" />

        <ul className="flex space-x-2 text-white">
          <li className="font-bold">Start</li>
          <li>Shows</li>
          <li>Movies</li>
          <li>New</li>
          <li>My list</li>
        </ul>
      </nav>

      <div className="bg-red-200 flex space-x-3">
        <Image src={imgSearch} alt="Picture of the author" />
        <Image src={imgBell} alt="Picture of the author" />
      </div>
    </div>
  );
}
