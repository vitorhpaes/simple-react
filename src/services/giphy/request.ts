import axios from 'axios'
import { GIPHY_API_KEY, GIPHY_API_URL } from '../../constants/API_CONFIG'

const giphyRequest = axios.create({
    baseURL: GIPHY_API_URL,
    params: {
        api_key: GIPHY_API_KEY
    }
})

export default giphyRequest