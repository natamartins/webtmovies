import axios from "axios"
import { useEffect, useState } from "react"
import { REACT_LANGUAGE } from "../api/apiUrl"

export function useFetch(url: string) {
  const [data, setData] = useState([])
  const [similar, setSimilar] = useState([])
  const [select, setSelect] = useState({})
  const [isFetching, setIsFetching] = useState(true)

  const fetchMovies = async () => {
    const { data } = await axios.get(url + `${REACT_LANGUAGE}`)
      .finally(() => {
        setIsFetching(false)
      })

    setData(data.results)
    setSelect(data.results[0])
    setSimilar(data.results[0])
  }

  useEffect(() => {
    fetchMovies()
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    data,
    similar,
    isFetching,
    select,
    setSelect,
    fetchMovies,
  }
}
