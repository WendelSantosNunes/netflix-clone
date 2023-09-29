"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";

// list
import { getMovies } from "@/services/Api/data";
import Link from "next/link";

interface MoviesProps {
  key: number;
  title: string;
  path: string;
}

interface Movie {
  backdrop_path?: string;
  first_air_date?: string;
  genre_ids?: number[];
  id?: number;
  name?: string;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  vote_average?: number;
  vote_count?: number;
}

export function Movies({ title, path }: MoviesProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const imagen = "https://image.tmdb.org/t/p/w500";

  async function fetchMovies(_path: string) {
    try {
      const data = await getMovies(_path);
      setMovies(data?.results);
    } catch (error) {
      console.log("Erro: ", error);
    }
  }

  useEffect(() => {
    fetchMovies(path);
  }, [path]);

  const carouselRef = useRef(null);

  const next = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 400;
    }
  };

  const previous = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 400;
    }
  };

  return (
    <>
      <div className="flex items-center mb-4">
        <p className="text-xl font-bold">{title}</p>
        <IconChevronRight />
      </div>

      <div className="relative">
        <div className="absolute flex h-full items-center">
          <button
            type="button"
            className="text-black px-2 py-4 ml-1"
            onClick={previous}
          >
            <IconChevronLeft size={70} className="text-red-500" />
          </button>
        </div>

        <div className="absolute right-0 flex h-full items-center">
          <button
            type="button"
            className="text-black px-2 py-4 mr-1"
            onClick={next}
          >
            <IconChevronRight size={70} className="text-red-500" />
          </button>
        </div>

        <div
          className="flex space-x-4 mb-14 overflow-x-hidden scroll-smooth"
          ref={carouselRef}
        >
          {movies.map((item, index) => {
            return (
              item.backdrop_path && (
                <Link
                  href={{
                    pathname: "/moviefilms",
                    query: { id: `${item.id}` },
                  }}
                  key={index}
                >
                  <div className="w-52 h-80">
                    <Image
                      key={index}
                      src={`${imagen}${item.poster_path}`}
                      width={200}
                      height={320}
                      alt={`${item.id}`}
                      className="rounded-xl hover:border-white hover:border"
                    />
                  </div>
                </Link>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}
