import { type } from "os"
import Movie from "./movie/page"

type Props = {};

export default async function Home({} : Props) {
  const url = "https://api.themoviedb.org/3/movie/popular?api_key=5c790f0e2723a9dddc8e954bd4e7c170"
  const data = await fetch(url) 
  const res = await data.json()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-4xl'>Movie Poster</h1>
      <p>
        {res.results.map((movie : any) =>(
          <p key={movie.id}>{movie.title}</p>
        ))}
      </p> 
      {/* <Movie
      // key={movie.id}
      // id={movie.id}
      // title={movie.title}
      // poster_path={movie.poster_path}
      // release_date={movie.release_date}
      /> */}
    </main>
  )
}
