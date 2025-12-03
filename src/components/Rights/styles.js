import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container = styled.div`
width: 100vw;
height: min-content;
background-color: ${theme.colors.primary};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

div {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    align-items: center;
    justify-content: center;
    padding: .4rem 0;
    
p {
    font-size: 1rem;
    color: ${theme.colors.darktext};
    font-family: 'GothamLight';
    
    a {
        color: ${theme.colors.darkblue};
        text-decoration: none; 

        
    }
    :hover {
            color: ${theme.colors.dark};
            cursor: pointer;
        }
   
}


}

`