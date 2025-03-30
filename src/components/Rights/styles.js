import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container = styled.div`
width: 100vw;
height: min-content;
background-color: ${theme.colors.secondary};
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
    font-size: .8rem;
    color: ${theme.colors.lighttext};
    font-family: 'GothamLight';
    
    a {
        color: ${theme.colors.primary};
        text-decoration: none; 

        
    }
    :hover {
            color: ${theme.colors.blue};
            cursor: pointer;
        }
   
}


}

`