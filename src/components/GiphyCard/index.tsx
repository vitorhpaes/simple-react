import { memo } from 'react'
import { GiphyProps } from "../../services/giphy/giphy";
import { StyledGiphyCard } from './styles'
import { Button, Box } from '@mui/material';

interface GiphyCardProps {
    giphy: GiphyProps
    onOpenGiphy: () => void
}

const GiphyCard: React.FC<GiphyCardProps> = ({ giphy, onOpenGiphy }) => {

    return (
        <StyledGiphyCard>
            <Box display='flex' alignItems='space-between'>
                <div className="title">{giphy.title}</div>
                <Button onClick={onOpenGiphy}>Open gifs</Button>
            </Box>
            <img src={giphy.images.original.url} />
        </StyledGiphyCard>
    )

};

export default memo(GiphyCard)