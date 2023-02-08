import axios from "axios"
import { useEffect } from "react"
import { REACT_API_KEY, REACT_URL } from "../api/apiUrl"

export function useFetchVideos(url: string) {
  const fetchVideo = async (id: string) => {
    const { data } = await axios.get(`${REACT_URL}/${url}/${id}`, {
      params: {
        api_key: REACT_API_KEY,
        append_to_response: 'videos',
        language: 'pt-BR'
      }
    })

    return data
  }
  useEffect(() => {
    fetchVideo('')
    window.scrollTo(0, 0)
  }, [])

  return {
    fetchVideo
  }
}
