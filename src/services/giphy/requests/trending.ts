import giphyRequest from '../request'
import { PaginationProps } from './../pagination.d';
import { GiphyProps } from './../giphy.d';

interface SearchGiphysPayload {
    q: string
    limit: number
    offset: number
}

const fetchSearchGiphs = (payload: SearchGiphysPayload) => giphyRequest.get<PaginationProps<GiphyProps>>('/gifs/search', {
    params: payload
})

export default fetchSearchGiphs