import poster from "../assets/default_movie_poster.png"

function MovieResults({movies}) {
    return (
        <div className="movie-results">
            {
                movies.map(movie => (
                    <div className="movie-block" key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{`Year of release: ${movie.year}`}</p>
                        <img src={movie.poster==='N/A' ? poster : movie.poster} alt={movie.Title} />
                    </div>
                ))
            }
        </div>

    )
}

function NoMovieResults() {
    return(
        <p>
            No results for your search...
        </p>
    )
}

export default function Movie({movies}){
    const hasMovies = movies?.length > 0
    return(
        hasMovies ? <MovieResults movies={movies}/> : <NoMovieResults/>
    )
}