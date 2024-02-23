import { Box } from '@mui/material'
import { useEffect } from 'react'
import fetchSearchGiphs from './../../../services/giphy/requests/search';
import { useState } from 'react';
import { GiphyProps } from '../../../services/giphy/giphy';
import { TextField } from '@mui/material';
import { useRef } from 'react';
import GiphyCard from './../../../components/GiphyCard';
import GiphyLightBox from '../../../components/GiphyLightBox';

function HomePage() {
    const counterRef = useRef<number>()
    const [searchString, setSearchString] = useState<string>()
    const [searchStringHelper, setSearchStringHelper] = useState<string>()

    const [giphys, setGiphys] = useState<GiphyProps[]>([])
    const [selectedGiphy, setSelectedGiphy] = useState<GiphyProps | null>(null)

    useEffect(() => {
        if (counterRef.current) clearTimeout(counterRef.current)
        counterRef.current = setTimeout(() => {
            setSearchString(searchStringHelper)
        }, 1500)

        return () => {
            if (!counterRef.current) return;
            clearTimeout(counterRef.current)
        }
    }, [searchStringHelper])

    useEffect(() => {
        if (!searchString) return;
        fetchSearchGiphs({
            q: searchString,
            limit: 20,
            offset: 0
        }).then(response => {
            const { data: giphys } = response.data
            setGiphys(giphys)
        })
    }, [searchString])

    console.log({ giphys })

    return (
        <Box display='flex' width="100vw" height="100vh" alignItems='center' justifyContent='center' flexDirection='column'>
            <TextField
                name="search"
                label='Search'
                onChange={(e) => setSearchStringHelper(e.target.value)}
                value={searchStringHelper}
            />
            <Box
                display='flex'
                flexDirection='column'
                marginLeft="24px"
                maxHeight="70%"
                overflow="auto"
                marginTop="10px"
                gap="8px"
                padding="10px"
            >
                {giphys.map(gif => (
                    <GiphyCard key={gif.id} giphy={gif} onOpenGiphy={() => setSelectedGiphy(gif)} />
                ))}
                <GiphyLightBox
                    isOpen={!!selectedGiphy}
                    giphy={selectedGiphy}
                    onClose={() => setSelectedGiphy(null)}
                />
            </Box>
        </Box>
    )
}

export default HomePage
