import './App.css'
import useMovie from './hooks/useMovie.js'
import useSearch from './hooks/useSearch.js'
import Movie from './components/Movies.jsx'

function App() {

  const mappedMovies = useMovie()
  const {search, updateSearch, error} = useSearch()


  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <>
      <header className='container'>
        <h1>Movie Finder</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} style={{borderColor: error ? 'red' : 'rgb(255,255,255,0.1)'}} name='search' type="text" placeholder='Avengers, Titanic, Interstellar...' />
          {error && <p className='error'>Error: {error}</p>}
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