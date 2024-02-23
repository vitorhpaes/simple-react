import axios from 'axios'
import { GIPHY_API_KEY, GIPHY_API_URL } from '../../constants/API_CONFIG'

// or
// const GIPHY_API_URL = import.meta.env.VITE_GIPHY_API_URL
// const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API_KEY

const giphyRequest = axios.create({
    baseURL: GIPHY_API_URL,
    params: {
        api_key: GIPHY_API_KEY
    }
})

export default giphyRequest