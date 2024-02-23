export interface ImageProps {
    height: string
    width: string
    size: string
    url: string
}


export interface GiphyProps {
    type: string
    id: string
    url: string
    slug: string
    bitly_gif_url: string
    bitly_url: string
    embed_url: string
    username: string
    source: string
    title: string
    rating: string
    content_url: string
    source_tld: string
    source_post_url: string
    is_sticker: number
    import_datetime: string
    trending_datetime: string
    images: {
        [key: string]: ImageProps
    }
    user: User
    analytics_response_payload: string
    // analytics: Analytics
}