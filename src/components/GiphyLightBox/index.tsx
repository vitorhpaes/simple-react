import { useMemo } from 'react'
import { GiphyProps } from '../../services/giphy/giphy'
import { StyledGiphyLightBox, StyledLightBoxWrapper } from './styles'
import { Box, Button } from '@mui/material';

interface GiphyLightBoxProps {
    giphy: GiphyProps | null
    isOpen: boolean
    onClose: () => void
}

const GiphyLightBox: React.FC<GiphyLightBoxProps> = ({ giphy, isOpen, onClose }) => {

    const allGifs = useMemo(() => !!giphy?.images ? Object.keys(giphy?.images).map(key => {
        const currentGif = giphy.images[key]
        return {
            key: key,
            url: currentGif.url
        }
    }) : [], [giphy?.images])

    if (!isOpen || !giphy) return <></>

    return (
        <StyledLightBoxWrapper>
            <StyledGiphyLightBox>
                <Box width="100%" display='flex' justifyContent='flex-end' mb="8px">
                    <Button onClick={onClose}>Close</Button>
                </Box>
                <div
                    className="giphys-list"
                >
                    {allGifs.map(gif => (
                        <div className="gif-item" key={gif.key}>
                            <img src={gif.url} height="auto" />
                        </div>
                    ))}
                </div>
            </StyledGiphyLightBox>
        </StyledLightBoxWrapper>
    )

}

export default GiphyLightBox


