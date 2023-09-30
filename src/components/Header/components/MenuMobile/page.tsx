import { IconCircleDashedX, IconList } from "@tabler/icons-react";

interface view {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuMobile({ menuIsVisible, setMenuIsVisible }: view) {
  return (
    <div className="md:invisible md:opacity-0 md:hidden">
      {menuIsVisible ? (
        <div className="fixed w-full h-full top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center bg-gradient-to-br from-[#23252B] to-[rgba(17,18,17,0.95)]">
          <IconCircleDashedX
            size={32}
            color="#fff"
            onClick={() => setMenuIsVisible(false)}
            className="absolute top-6 right-4 origin-center rotate-180 transition-all duration-400 cursor-pointer hover:fill-color-border-1"
          />

          <nav className="text-white w-full">
            <ul className="flex items-center justify-center flex-col scale-75 text-3xl gap-9">
              <li>
                <a href="#" onClick={() => setMenuIsVisible(false)}>
                  <strong className="relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-700 hover:before:w-full hover:before:left-0 hover:before:bg-color-border-1 hover:text-color-border-1">
                    Programas
                  </strong>
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setMenuIsVisible(false)}>
                  <strong className="relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-700 hover:before:w-full hover:before:left-0 hover:before:bg-color-border-1 hover:text-color-border-1">
                    Filmes
                  </strong>
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setMenuIsVisible(false)}>
                  <strong className="relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-700 hover:before:w-full hover:before:left-0 hover:before:bg-color-border-1 hover:text-color-border-1">
                    Séries
                  </strong>
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setMenuIsVisible(false)}>
                  <strong className="relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-700 hover:before:w-full hover:before:left-0 hover:before:bg-color-border-1 hover:text-color-border-1">
                    Minha lista
                  </strong>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <IconList
          size={32}
          // weight="fill"
          color="#fff"
          className="cursor-pointer hover:fill-color-border-1"
          onClick={() => setMenuIsVisible(true)}
        />
      )}
    </div>
  );
}
