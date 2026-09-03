import './App.css'
import useMovie from './hooks/useMovie.js'
import Movie from './components/Movies.jsx'

function App() {

  const mappedMovies = useMovie()

  return (
    <>
      <header className='container'>
        <h1>Movie Finder</h1>
        <form>
          <input type="text" placeholder='Avengers, Titanic, Interstellar...' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main className='container'>
        <Movie movies={mappedMovies}/>
      </main>
    </>
  )
}

export default App