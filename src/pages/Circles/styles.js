import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
gap: .8rem;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1rem;
background-color: ${theme.colors.dark};

h1 {
    color: ${theme.colors.lightblue};
    font-family: 'Sports-World';
    font-size: 3rem;
}

h2{
    color: ${theme.colors.lightblue};
    font-family: 'Sports-World';
    font-size: 2rem;
}
.textCircle {
    color: ${theme.colors.lighttext};
    font-family: 'Poppins';
    font-weight: 800;
    font-size: 1.5rem;
    max-width: 60%;

}

p{
    color: ${theme.colors.lighttext};
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1rem;
    

}



`

export const Content = styled.div`
max-width: 95%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 2rem;

`