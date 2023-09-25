import Image from "next/image";
import imgLogo from "../../public/assets/Title-Image.png";

import { Header } from "@/components/Header/page";

export default function Home() {
  return (
    <main>
      <Image src={imgLogo} alt="" className="w-full relative" />

      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Header />
      </div>
    </main>
  );
}
