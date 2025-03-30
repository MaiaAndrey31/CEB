import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container = styled.div`
background-color: ${theme.colors.primary};
height: 100%;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;

h1 {
    font-family: 'Sports-World';
    font-size: 3rem;
    color: ${theme.colors.darktext};
    padding: 1.8rem;
}


`

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 1rem;

`

export const ContainerRight = styled.div`
width: 50%;
font-family: 'Poppins';
padding: 1.5rem;

h2{
    font-weight: 800;
}
h3{
    font-weight: 600;
}
p {
    font-weight: 500;
    font-size: 1rem;
}

`

export const ContainerLeft = styled.div`
width: 50%;
height: 100%;
background-color: ${theme.colors.dark};
border-radius: 10%;
border: 6px solid
${theme.colors.lightblue};
padding: .2rem;

img {
    border-radius: 10%;
    padding: 1rem;
}

`