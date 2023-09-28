import { Header } from "@/components/Header/page";
import Image from "next/image";
import imgLogo from "../../../public/assets/Title-Image.png";

export default function MovieFilms() {
  return (
    <>
      <main>
        <Image src={imgLogo} alt="" className="w-full relative h-96 bg-cover" />

        <div className="absolute top-0 left-0 right-0 bottom">
          <Header />
        </div>
      </main>
    </>
  );
}
