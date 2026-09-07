import { useState, useEffect, useRef } from "react";

function useSearch(){
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const madeFirstSearch = useRef(false)

  useEffect(() => {

    if (!madeFirstSearch.current){
      madeFirstSearch.current = search != ''
      return
    }

    if(search.trim() === ''){
      setError('Title cannot be empty')
      return
    }

    if(search.match(/^\d+$/)){
      setError('Title cannot be just a number')
      return
    }

    if(search.length < 2){
      setError('Title must have at least 2 characters')
      return
    }

    setError(null)
  }, [search])

  return {search, madeFirstSearch, updateSearch, error}

}

export default useSearch