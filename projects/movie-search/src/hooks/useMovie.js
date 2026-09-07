import { useState, useRef } from 'react'
import { searchMovies } from '../services/movies'

function useMovie({ search }) {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const lastSearch = useRef(search)
    
    const getMovies = async () => {
        if (search === lastSearch.current){
            return
        }else{
            lastSearch.current = search
        }
        
        setLoading(true)
        const newMovies = await searchMovies({search})
        setMovies(newMovies)
        setLoading(false)
    }

    return {movies, loading, getMovies}
}

export default useMovie