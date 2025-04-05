import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: ${theme.colors.primary};
height: auto;

h1 {
    font-size: 3rem;
    font-family: 'Sports World', sans-serif;
    padding-top: 1rem;
}
`
export const Content = styled.div`
display: flex;
padding: .9rem;
height: auto;
width: 100%; 

@media (min-width: 481px) and (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }
    @media (min-width: 300px) and (max-width: 480px) {

        flex-direction: column;
      align-items: center;
      padding: 0;
    }

`

export const ContainerLeft = styled.div`
display: flex;
padding: 0.5rem;
flex-direction: column;
align-items: center;
justify-content: space-around;
width: 40%;

.main {
    font-family: 'Poppins';
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;

    span {
        color: ${theme.colors.blue};
        font-size: 1.8rem;
    }
}

.footerText {
    font-size: .8rem;
    font-family: 'Poppins';
    font-weight: 600;


}

.second {
    font-size: 1rem;
    font-family: 'Poppins';
    font-weight: 600;
    color: ${theme.colors.blue};

}

@media (min-width: 481px) and (max-width: 767px) {
    width: 90%;
    .main {
    font-size: 1.1rem;

    span {
        font-size: 1.8rem;
    }
}

.footerText {
    font-size: .8rem;


}

.second {
    font-size: .9rem;

}
     
    }

    @media (min-width: 300px) and (max-width: 480px) {
        width: 90%;
    .main {
    font-size: 1.1rem;

    span {
        font-size: 1.8rem;
    }
}

.footerText {
    font-size: .8rem;


}

.second {
    font-size: .9rem;

}

}


`
export const ContainerRight = styled.div`

width: 60%;

@media (min-width: 481px) and (max-width: 767px) {
      width: 80%;
    }
    
    @media (min-width: 300px) and (max-width: 480px) {
        width: 90%;

}
`