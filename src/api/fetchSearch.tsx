import axios from "axios"
import { REACT_API_KEY, REACT_URL } from "./apiUrl"

// this function selects the per click ID of the movie
export const fetchSearch = async () => {
    const { data } = await axios.get(`${REACT_URL}/search/multi?}`, {
        params: {
            api_key: REACT_API_KEY,
        }
    })
    return data
}

