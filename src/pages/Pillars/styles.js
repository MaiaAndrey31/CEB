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

@media (min-width: 300px) and (max-width: 480px) {

h1{
    font-size: 2.5rem;
    padding-top: 0.5rem;
    text-align: center;
}

p {
    font-size: 1rem;    
    width: 90%;
    text-align: center;
}

}

`


export const Content = styled.div`
width: 80%;
padding-bottom: 1rem;

`