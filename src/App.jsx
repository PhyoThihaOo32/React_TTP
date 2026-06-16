import { useState } from 'react'
import MovieCard from './MovieCard'
import './App.css'

const initialMovies = [
  { id: 1, title: "The Matrix",                         genre: "Sci-Fi",    year: 1999, watched: false },
  { id: 2, title: "Parasite",                           genre: "Thriller",  year: 2019, watched: false },
  { id: 3, title: "Everything Everywhere All at Once",  genre: "Sci-Fi",    year: 2022, watched: true  },
  { id: 4, title: "Knives Out",                         genre: "Mystery",   year: 2019, watched: false },
  { id: 5, title: "Coco",                               genre: "Animation", year: 2017, watched: true  },
  { id: 6, title: "Get Out",                            genre: "Horror",    year: 2017, watched: false },
]

export default function App() {


  const [movies, setMovies] = useState(initialMovies)

  function toggleWatched(id){

    setMovies(movies.map((movie)=>{
        if(movie.id === id){
          return {...movie, watched: !movie.watched};
        }

        // if statement checks for if the current movie id equals the target id of the function. If it does
        // then it will MAKE A COPY of the array, then return the OPPOSITE BOOLEAN value of WATCHED from the ORIGINAL array
        // so the COPY array now has the REVERSE BOOLEAN value of WATCHED
        return movie; // This is for movies that dont match the id 
      }
    )
  )
}


  return (
    <div>
      <h1>Movie Night</h1>
      {movies.map((movie)=>(
        <MovieCard onToggle={toggleWatched} movie={movie} key={movie.id} /> //movie = {movie} would be prop = {movie} but in MovieCard.jsx we used {movie} in place of prop for the component so the prop is named movie now
      ))}
    </div>
  )
}