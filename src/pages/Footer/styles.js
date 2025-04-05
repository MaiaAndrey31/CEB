import styled from "styled-components"
import { theme } from "../../styles/theme"


export const Container = styled.div`
width: 100vw;
background-color: ${theme.colors.dark};
display: grid;
grid-template-columns: 1fr 1fr 1fr;
padding: 2rem;

`

export const Content = styled.div`
 display: flex;
  align-items: start;
  justify-content: center;
  
  

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 0.6rem;

    
  }

  p {
    color: ${theme.colors.primary};
    font-family: 'Sports-World';
    font-weight: 600;
    font-size: .9rem;
  }

  

`

export const ContainerLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.6rem;
border-right: 1px solid ${theme.colors.secondary};

img{
    height: 160px;
    width: 250px;
    border-radius: 30px;
}
a {
    
}
h2 {
    text-decoration: none;
    color: ${theme.colors.lightblue};
    font-family: 'Sports-World';

   

}

@media (min-width: 481px) and (max-width: 767px) {
      img{
height: 100px;
width: 180px;

      }
      h2 {
        font-size: 1.2rem;
      }
    }
    @media (min-width: 300px) and (max-width: 480px) {
      padding: 0.5rem;
      img{
height: 95px;
width: 140px;
object-fit: cover;

      }
      h2 {
        font-size: 1rem;
        text-align: center;
      }

}

`
export const ContainerCenter = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
gap: 0.6rem;


p {
    text-decoration: none;
    font-family: 'Sports-World';
    font-size: 18px;
    font-weight: 600;
    color: ${theme.colors.blue};

    
}
@media (min-width: 300px) and (max-width: 480px) {
  p {
    font-size: 13px;
  }

}
:hover {
        color: ${theme.colors.primary};
        transform: scale(1.01);
        transition: ease-in-out 0.5s;
        text-shadow: 0.01rem 0.02rem 6px ${theme.colors.primary} ;
    }
`
export const ContainerRight = styled.div`

display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
border-left: 1px solid ${theme.colors.secondary};


`
