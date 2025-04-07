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
    font-family: 'Sports World', sans-serif;
    font-size: 3rem;
    font-weight: 400;
}

h2{
    color: ${theme.colors.lightblue};
    font-family: 'Sports World', sans-serif;
    font-size: 2rem;
    font-weight: 400;
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

@media (min-width: 481px) and (max-width: 767px) {
    height: auto;
    h1 {
   
    font-size: 2rem;
}

h2{
    
    font-size: 1.5rem;
}


p{
    
    font-size: 1rem;
    

}

.textCircle {
    font-size: 1.2rem;
    max-width: 80%;

}
    }

    @media (min-width: 300px) and (max-width: 480px) {
        height: auto;

        h1 {
            font-size: 1.8rem;
            text-align: center;
        }
        h2{
    
    font-size: 1.4rem;
    text-align: center;
}


p{
    
    font-size: 1rem;
    

}

.textCircle {
    font-size: 1.1rem;
    max-width: 90%;

}
}



`

export const Content = styled.div`
max-width: 95%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 2rem;

@media (min-width: 481px) and (max-width: 767px) {
    padding-bottom: 1.8rem;

     

      .tab1 {
        font-size: 1.2rem;
        padding: 0.3rem;
        
      }
    }
    .panel2{
        
        font-size: .8rem;
        height: 100%;
    }

`