import axios from "axios"
import { useEffect, useState } from "react"
import { REACT_LANGUAGE } from "../api/apiUrl"

export function useMovieSolo(url: string) {
  const [data, setData] = useState()
  const [select, setSelect] = useState({})
  const [isFetching, setIsFetching] = useState(true)
  const fetchMovies = async () => {
    const { data } = await axios.get(url + `${REACT_LANGUAGE}`)
      .finally(() => {
        setIsFetching(false)
      })
    setSelect(data)
    setData(data)
  }

  useEffect(() => {
    fetchMovies()
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    data,
    select,
    setSelect,
    fetchMovies,
    isFetching
  }
}
