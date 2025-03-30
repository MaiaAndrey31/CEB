import styled from "styled-components"
import {theme} from '../../styles/theme'


export const Container = styled.div`
background-color: ${theme.colors.primary};
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


h1 {

    color: ${theme.colors.blue};
    font-family: 'Sports-World';
    font-size: 3.2rem;
    padding-top: 1rem;
}

p {
    font-family: 'Poppins';
    color: ${theme.colors.dark};
    font-size: 1.2rem;
        font-weight: 700;
        max-width: 80%;
        padding: 1rem;
}

`


export const Content = styled.div`
width: 80%;
padding-bottom: 1rem;

`