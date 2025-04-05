import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container = styled.div`
background-color: ${theme.colors.secondary};
height: 100%;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;

h1 {
    font-family: 'Sports World';
    font-size: 3rem;
    color: ${theme.colors.lightblue};
    padding: 1.8rem;
}

`

export const Content = styled.div`
display: flex;
flex-wrap: wrap;
gap: 2rem;
align-items: center;
justify-content: center;
padding: 1rem;

:hover {
    box-shadow: 0px 0px 36px 6px rgba(112,225,230,0.6);
    transform: scale(1.01);
    transition: ease-in-out 0.4s;
    cursor: pointer;
}

`