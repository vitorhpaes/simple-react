import { styled } from 'styled-components'

export const StyledLightBoxWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, .6);

    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledGiphyLightBox = styled.div`

    padding: 20px 30px;
    border: 1px solid rgba(50, 50, 50);
    background-color: rgba(75, 75, 75);

    max-height: 60%;
    max-width: 60%;

    display: flex;
    flex-direction: column;
    gap: 8px;

    max-width: 600px;
    overflow-y: auto;

    border-radius: 10px;

    .giphys-list {

        display: flex;
        flex-direction: row;
        width: 100%;

        .gif-item {
            width: 200px;
            height: auto;
        }

    }

`