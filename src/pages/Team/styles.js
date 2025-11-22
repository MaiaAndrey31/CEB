import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container = styled.div`
background-color: ${theme.colors.blue};
height: 100%;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;

h1 {
    font-family: 'Sports World';
    font-weight: 400;
    font-size: 3rem;
    color: ${theme.colors.light};
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



`