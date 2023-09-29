"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IconJewishStarFilled, IconUsers } from "@tabler/icons-react";
import { Header } from "@/components/Header/page";
import { getMovie } from "@/services/Api/data";
import { formatDate } from "@/utils/formtDate";

interface MovieData {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget?: number;
  genres?: {
    id: number;
    name: string;
  }[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: {
    id: number;
    name: string;
    logo_path: string;
  }[];
  production_countries?: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: {
    iso_639_1: string;
    name: string;
  }[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export default function MovieFilms() {
  const [movie, setMovie] = useState<MovieData>({});
  const searchParams = useSearchParams();
  const id = searchParams.get("id") as string;
  const imagen = "https://image.tmdb.org/t/p/w500";
  const imagenFundo = "https://image.tmdb.org/t/p/original/";

  async function fetchMovie(_id: string) {
    try {
      const data = await getMovie(_id);
      setMovie(data);
    } catch (error) {
      console.log("Erro: ", error);
    }
  }

  useEffect(() => {
    fetchMovie(id);
  }, [id]);

  return (
    <>
      <main>
        {movie.backdrop_path && (
          <Image
            src={`${imagenFundo}${movie.backdrop_path}`}
            alt=""
            width={1400}
            height={900}
            className="w-full h-full bg-cover relative"
          />
        )}

        <section className="absolute top-0 left-0 right-0 bottom">
          <Header />

          <div className="max-md:mt-72 max-sm:mt-24 mt-96 text-white bg-black p-11 ">
            <div className="mx-auto max-w-screen-2xl flex flex-col items-center justify-center">
              <div className="mt-4 max-w-3xl flex gap-8 max-md:flex-wrap ">
                {movie.poster_path && (
                  <>
                    <div className="max-md:m-auto">
                      <Image
                        src={`${imagen}${movie.poster_path}`}
                        width={300}
                        height={700}
                        alt=""
                        className="relative max-w-xs"
                      />
                    </div>
                    <div className="text-lg font-bold">
                      <h1 className="font-bold text-4xl -ml-1 mb-2">
                        {movie.title ? movie.title : movie.original_title}
                      </h1>

                      <p className="font-bold mb-2">{movie.tagline}</p>

                      <div className="flex gap-4 text-yellow-300 mb-3">
                        <div className="flex items-center gap-2">
                          <IconJewishStarFilled />
                          <p>{movie.vote_average}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <IconUsers />
                          <p>{movie.vote_count}</p>
                        </div>
                      </div>

                      <p>
                        Status:{" "}
                        <span className="text-red-500">{movie.status}</span>
                      </p>
                      <p>
                        Lançamento:{" "}
                        <span className="text-red-500">
                          {formatDate(movie.release_date as string)}
                        </span>
                      </p>
                      <p>
                        Idioma Oficial:{" "}
                        <span className="text-red-500">
                          {movie.original_language}
                        </span>
                      </p>
                      <p>
                        Pais:{" "}
                        <span className="text-red-500">
                          {movie.production_countries?.[0]?.name}{" "}
                        </span>
                      </p>
                      <p className="mb-5">
                        Título Oficial:{" "}
                        <span className="text-red-500">
                          {movie.original_title}
                        </span>
                      </p>

                      <div className="flex gap-4 mb-5 flex-wrap">
                        {movie.genres?.map((item, index) => {
                          return (
                            <p
                              key={index}
                              className="text-red-500 border border-white px-2 py-1 rounded-xl"
                            >
                              {item.name}
                            </p>
                          );
                        })}
                      </div>

                      <h2 className="mb-2 text-2xl">Sinopse</h2>
                      <p className=" font-normal">{movie.overview}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
