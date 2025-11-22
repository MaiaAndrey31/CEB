
import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container = styled.div`
background-color: transparent;
border: 1px solid ${theme.colors.lightblue};
border-radius: 10%;
height: 370px;
width: 280px;
display: flex;
flex-direction: column;
align-items: center;

padding: 1rem;





img {
    width: 160px;
    height: 180px;
  
    border: 3px solid ${theme.colors.primary};
    border-radius: 30px 0px;
    object-fit: cover;
    
}

h6 {
    font-size: 1.4rem;
    color: ${theme.colors.light};
    
    padding-bottom: 10px;
    font-family: 'Poppins';
    font-weight: 600;

    
}
p {
    font-size: 13px;
    color: ${theme.colors.darktext};
    font-weight: 500;
    font-family: 'Poppins';
    text-align: center;
}




`
