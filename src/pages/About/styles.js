import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: .8rem;
height: 100%;
width: 100%;
background-color: ${theme.colors.dark};
padding: 1rem;
div {
    display: flex;
    gap: 0.5rem;

    @media (min-width: 481px) and (max-width: 767px) {
      flex-direction: column-reverse;
      align-items: center;
    }

    @media (min-width: 300px) and (max-width: 480px) {

        flex-direction: column-reverse;
      align-items: center;
    }
}

h1{
    color: ${theme.colors.primary};
    font-family: 'Sports World', sans-serif;
    font-weight: 400;
    font-size: 3rem;
}

`



export const ContainerLeft = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50%;
p {
    font-size: 1.2rem;
    font-family: 'Poppins';
    font-weight: 600;
    color: ${theme.colors.light};
    text-align: center;
    padding: .6rem;
}
span {
    color: ${theme.colors.primary};
}

@media (max-width: 768px) {
width: 90%;
p{
    font-size: 1rem;
}}

`

export const ContainerRight = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50%;

img {
    max-height: 550px;
    padding-bottom: 1.2rem;
}

@media (min-width: 481px) and (max-width: 767px) {
      width: 90%;
    }

`

