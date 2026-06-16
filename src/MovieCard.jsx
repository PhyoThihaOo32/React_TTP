function MovieCard({movie, onToggle}){ //When having multiple prop keep in 1 {} seperate with ' , '
// const [movies, setMovies] = useState(initialMovies)

let stats = "";
let btnLbl = "";

if(movie.watched === true){
    stats = "Watched"
    btnLbl = "Mark as Unwatched"
}
else{
    stats = "Not Watched Yet"
    btnLbl = "Mark as Watched"
}

// The if statement above decides the text value of the of the Watcged Status and the Button Label

return (  <>
<div key={movie.id}> {movie.title} {" "} {movie.genre} {" "} {movie.year} 
    <p>{stats}</p> 
    <button onClick={()=> onToggle(movie.id)} > 
        {btnLbl} 
    </button> 
</div>

</>)
}

export default MovieCard