import styled from 'styled-components'
import { theme } from '../../styles/theme'
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
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 100%;
    height: auto;
    justify-content: space-around;
    gap: 1rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    /* Further adjust for tablets */
  }
`

export const ContainerLeft = styled.div`
  width: 50%;
  height: auto;
  display: flex;

  img {
    height: 80px;
    width: 180px;
    border-radius: 30px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    width: auto;
    height: auto;
    justify-content: space-between;

    img {
      padding-right: 2rem;
    }
  }
  @media (max-width: 768px) {
    justify-content: space-between;
    padding-bottom: 2rem;

    /* Further adjust for tablets */
  }
`
export const ContainerRight = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 992px) and (max-width: 1199px) {
    width: auto;
    height: auto;
  }
  @media (min-width: 300px) and (max-width: 480px) {
    flex-wrap: wrap;
  }
`
export const ContactContainer = styled.div`
  display: flex;
  :hover {
    transform: scale(1.1);
    transition: ease-in-out 0.6s;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    text-decoration: none;
    color: ${theme.colors.dark};
   font-family: 'Sports World', sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`

export const Hero = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${theme.colors.blue};
   font-family: 'Sports World', sans-serif;
    font-size: 2.2rem;
    padding: 1rem;
  }

  @media (min-width: 1200px) and (max-width: 1919px) {
    padding-bottom: 2rem;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 100%;

    height: auto;
  }

  @media (min-width: 300px) and (max-width: 480px) {
    height: auto;
    min-width: 100%;
    h1{
      font-size: 1.5rem;
      text-align: center;
    }
  }
`

export const HeroContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 100%;
    height: auto;
    flex-direction: column;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }

  @media (min-width: 300px) and (max-width: 480px) {
    flex-direction: column;
    gap: 2rem;
  }
`

export const ContentLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: ${theme.colors.lighttext};
    font-family: 'Poppins';
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 1.5rem;

    width: 500px;

    span {
      color: ${theme.colors.lightblue};
      font-weight: 700;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 100%;
    height: auto;
    padding-bottom: 2rem;
  }

  @media (min-width: 300px) and (max-width: 480px) {
    width: 90%;
  }
`

export const ContentRight = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 481px) and  (max-width: 768px) {
    padding-bottom: 2rem;
  }

  @media (min-width: 300px) and (max-width: 480px) {
    width: 90%;
    padding-bottom: 2rem;

}
`
