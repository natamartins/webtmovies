import axios from "axios"
import { useEffect, useState } from "react"
import { REACT_API_KEY, REACT_URL } from "../api/apiUrl"

export function useSearch(urlSearch: string, url: string) {
  const [data, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [isFetching, setIsFetching] = useState(true)
  const fetchMovies = async (search: string) => {
    const type = search ? urlSearch : url
    const { data: { results } } = await axios.get(`${REACT_URL}/${type}`,
      {
        params: {
          api_key: REACT_API_KEY,
          query: search,
          language: 'pt-BR'
        }
      }
    ).finally(() => {
      setIsFetching(false)
    })

    setMovies(results)
  }

  const searchMovies = (e: any) => {
    e.preventDefault()
    fetchMovies(search)
  }

  useEffect(() => {
    fetchMovies(search)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return {
    data,
    searchMovies,
    setSearch,
    fetchMovies,
    isFetching
  }
}
