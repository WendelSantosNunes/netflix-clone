// Pacotes
import Image from "next/image";
import { IconPlayerPlayFilled, IconInfoCircle } from "@tabler/icons-react";

// Imagen
import imgLogo from "../../public/assets/Title-Image.png";
import imgNetflix from "../../public/assets/Netflix_Symbol.svg";

// Components
import { Header } from "@/components/Header/page";
import { Button } from "@/components/Button";

// services
import categories from "../services/Api/data";
import { Movies } from "@/components/Movies/page";

export default function Home() {
  return (
    <main>
      <Image src={imgLogo} alt="" className="w-full relative" />

      <div className="absolute top-0 left-0 right-0 bottom">
        <Header />

        <div className="mx-auto mt-96 max-w-screen-2xl text-white">
          <div className="flex items-center space-x-2 mb-7">
            <Image src={imgNetflix} alt="" />
            <p className="font-bold">SHOW</p>
          </div>

          <h1 className="text-9xl font-extrabold mb-8 -ml-2.5">MAID</h1>

          <div className="flex space-x-4">
            <Button styles="text-black bg-white border-0 hover:bg-opacity-50 font-bold">
              <>
                <IconPlayerPlayFilled /> Play
              </>
            </Button>
            <Button styles="text-black font-bold bg-white border-0 bg-opacity-50 hover:bg-opacity-25 hover:text-white">
              <>
                <IconInfoCircle />
                More info
              </>
            </Button>
          </div>
        </div>

        <section className="mx-auto mt-16 max-w-screen-2xl text-white">
          {categories.map((categories, index) => {
            return (
              <Movies
                key={index}
                title={categories.title}
                path={categories.path}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}
