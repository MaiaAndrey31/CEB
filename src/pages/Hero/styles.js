import styled from "styled-components"
import { theme } from "../../styles/theme"
export const Container = styled.div`
background-color: ${theme.colors.secondary};
min-height: 100vh;
width: 100vw;



`


export const Header = styled.div`

width: 100%;
height: auto;
padding: 1rem;
display: flex;
align-items: center;
justify-content: center;
background-color: ${theme.colors.primary};
`

export const ContainerLeft = styled.div`
width: 50%;
height: auto;
display: flex;
justify-content: space-between;
img{
    height: 80px;
    width: 180px;
    border-radius: 30px;
}

`
export const ContainerRight = styled.div`
width: 50%;
height: auto;
display: flex;
justify-content: center;
gap: 2rem;




`
export const ContactContainer = styled.div`
display: flex;
:hover {
    transform: scale(1.1);
    transition: ease-in-out .6s;
}

a{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .3rem;
    text-decoration: none;
    color: ${theme.colors.dark};
    font-family: 'Sports-World';
    font-weight: 700;
    font-size: 1.2rem;
}


`

export const Hero = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h1{
    color: ${theme.colors.blue};
    font-family: 'Sports-World';
    font-size: 2.2rem;
    padding: 1rem;
}
`

export const HeroContent = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

export const ContentLeft = styled.div`
height: 100%;
width: 50%;
display: flex;
align-items: center;
justify-content: center;

p{
    color: ${theme.colors.lighttext};
    font-family: 'Poppins';
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 1.5rem;
    
    width: 500px;

    span{
        color: ${theme.colors.lightblue};
        font-weight: 700;
    }
}
`

export const ContentRight = styled.div`
height: 100%;
width: 50%;
display: flex;
align-items: center;
justify-content: center;


`