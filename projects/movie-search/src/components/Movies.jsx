function MovieResults({movies}) {
    return (
        <div className="movie-results">
            {
                movies.map(movie => (
                    <div className="movie-block" key={movie.imdbID}>
                        <h3>{movie.title}</h3>
                        <p>{`Year of release: ${movie.year}`}</p>
                        {movie.poster!='N/A' ? <img src={movie.poster} alt={movie.Title} /> : 'No poster reached for this movie'}
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