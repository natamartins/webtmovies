import axios from "axios"
import { REACT_API_KEY, REACT_URL } from "./apiUrl"

// this function selects the per click ID of the movie
export async function fetchVideo(id: string) {
    const { data } = await axios.get(`${REACT_URL}/movie/${id}`, {
        params: {
            api_key: REACT_API_KEY,
            append_to_response: 'videos'
        }
    })
    return data
}


export const fetchTvVideos = async (id: string) => {
    const { data } = await axios.get(`${REACT_URL}/tv/${id}`, {
        params: {
            api_key: REACT_API_KEY,
            append_to_response: 'videos'
        }
    })
    return data
}