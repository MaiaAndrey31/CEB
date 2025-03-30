import styled from 'styled-components'
import {theme} from '../../styles/theme'

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: ${theme.colors.secondary};

h1{
    font-family: 'Sports-World';
    font-size: 3.2rem;
    color: ${theme.colors.lighttext};
    padding-top: 1rem;

}

`
export const Content = styled.div`

display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
gap: 1.5rem;

div {
    display: flex;
    gap: 1rem;
    align-items: center;
    
}

h2{
    font-family: 'Sports-World';
    font-size: 2.4rem;
    color: ${theme.colors.blue};
}

h3 {
    font-size: 1.5rem;
    font-family: 'Poppins';
    font-weight: 700;
    color: ${theme.colors.lightblue};
    max-width: 80%;
    padding: 1rem;

}

`