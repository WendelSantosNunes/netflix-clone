const API_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

const categories = [
  {
    name: "thending", 
    title: "Em alta",
    path: `discover/movie?api_key=${API_KEY}&include_adult=false&include_video=true&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`
  },
  {
    name: "thending", 
    title: "Populares",
    path: `discover/movie?api_key=${API_KEY}&include_adult=false&include_video=true&language=pt-BR&page=1&sort_by=popularity.desc`
  },
  {
    name: "comedy", 
    title: "Comédias",
    path: `discover/movie?api_key=${API_KEY}&include_adult=false&include_video=true&language=pt-BR&page=1&with_genres=35`
  },
  {
    name: "romances", 
    title: "Romances",
    path: `discover/movie?api_key=${API_KEY}&include_adult=false&include_video=true&language=pt-BR&page=1&with_genres=10749`
  },
  {
    name: "documentaries", 
    title: "Documentários",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=99`
  }
]

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWIyNmYzMDE4ZDNiMmJiNzViN2RlMTA0NTBjNmM1YyIsInN1YiI6IjYyMDNiYjMzMDc5MmUxMDEwYTQ3OTAzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hzg4CgqZJXDJ8U29Y09joaxbh9D_ob7OwzFgAj8Qzo4`
  }
};


export const getMovies = async (path: string) => {
  try{
    let url = `https://api.themoviedb.org/3/${path}`;
    const response = await fetch(url, options)
    return await response.json();
  }catch (error) {
    console.log("Error getMovies: ", error)
  }
}

export default categories;