import styled, { keyframes } from "styled-components";

// Animações
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
  background-color: #0254a5ff;
  overflow-x: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;
  animation: ${fadeIn} 0.8s ease-out forwards;
  
  @media (max-width: 768px) {
    gap: 2.5rem;
  }
`;

export const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 1rem;
  background: linear-gradient(135deg, #1389ffff 0%, #0d345cff 100%);
  border-radius: 16px;
  margin: 1rem 0;
  box-shadow: 0 10px 30px rgba(250, 239, 239, 0.2);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.8s ease-out 0.2s both;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
  }
  
  h1 {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    color: #f5f7faff;
    margin-bottom: 1.5rem;
    text-shadow: 1px 2px 8px rgba(252, 72, 72, 0.72);
    animation: ${fadeIn} 0.8s ease-out 0.4s both;
  }
  
  p {
    font-size: clamp(1.2rem, 2vw, 1.8rem);
    color: rgba(255, 255, 255, 0.9);
    max-width: 900px;
    margin: 0 auto 2rem;
    line-height: 1.6;
    animation: ${fadeIn} 0.8s ease-out 0.6s both;
  }
  
  @media (max-width: 768px) {
    padding: 2.5rem 1rem;
    
    h1 {
      font-size: 2.2rem;
    }
    
    p {
      font-size: 1.2rem;
    }
  }
`;

export const Section = styled.section`
  margin: 1.5rem 0;
  padding: 2.5rem;
  background: rgba(54, 54, 54, 0.9);
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: ${props => props.delay || '0.2s'};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }
  
  h2 {
    font-size: clamp(2rem, 4vw, 2.8rem);
    color: #ffffffff;
    margin: 0 0 2rem 0;
    position: relative;
    padding-bottom: 1rem;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 80px;
      height: 4px;
     background: linear-gradient(90deg, #ff0c0cff, #0077ffff);
      border-radius: 2px;
    }
  }
     h3 {
    font-size: clamp(2rem, 4vw, 2.8rem);
    color: #ffffffff;
    margin: 0 0 2rem 0;
    position: relative;
    padding-bottom: 1rem;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #ff0c0cff, #0077ffff);
      border-radius: 2px;
    }
  }
  
  p {
    font-size: clamp(1.1rem, 1.5vw, 1.6rem);
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1rem 0;
    
    h2 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }
    
    p {
      font-size: 1.1rem;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2.5rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export const Card = styled.div`
  background: rgba(253, 106, 106, 0.5);
  padding: 2rem 1.8rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.delay || '0.3s'};
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    background: rgba(250, 84, 84, 0.6);
  }
  
  h3 {
    font-size: clamp(1.4rem, 1.8vw, 1.8rem);
    color: #fff;
    margin: 0 0 1rem 0;
    font-weight: 600;
    position: relative;
    padding-bottom: 0.8rem;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 3px;
 background: linear-gradient(90deg, #ff0c0cff, #0077ffff);
 ]      border-radius: 2px;
    }
  }
  
  p {
    font-size: clamp(1rem, 1.2vw, 1.2rem);
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
    margin: 0;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: auto;
    
    h3 {
      font-size: 1.4rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

export const PriceCard = styled(Card)`
  text-align: center;
  background: rgba(46, 204, 113, 0.1);
  border: 1px solid rgba(46, 204, 113, 0.2);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 15px 30px rgba(46, 204, 113, 0.2);
    background: rgba(0, 255, 106, 0.56);
  }
  
  .price {
    font-size: clamp(2.2rem, 3vw, 2.8rem);
    color: #2ecc71;
    font-weight: 700;
    margin: 1rem 0 0.5rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    animation: ${pulse} 2s infinite;
  }
  
  .period {
    color: #bdf6faff;
    font-size: 1rem;
    margin-bottom: 1rem;
    display: block;
  }
  
  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;
    margin: 0.5rem 0 0;
  }
  
  @media (max-width: 768px) {
    .price {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out 0.4s forwards;
  
  li {
    padding: 0.8rem 0 0.8rem 2rem;
    position: relative;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;
    line-height: 1.6;
    transition: all 0.3s ease;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    
    &:last-child {
      border-bottom: none;
    }
    
    &::before {
      content: '✓';
      color: #2ecc71;
      position: absolute;
      left: 0;
      font-weight: bold;
      font-size: 1.2rem;
      transition: all 0.3s ease;
    }
    
    &:hover {
      transform: translateX(5px);
      color: #fff;
      
      &::before {
        color: #4ecdc4;
        transform: scale(1.2);
      }
    }
    
    @media (max-width: 768px) {
      font-size: 1rem;
`;

export const CtaButton = styled.a`
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
background: linear-gradient(90deg, #38c700ff 0%, #2ecc71 100%);
color: white;
border-radius: 50px;
text-decoration: none;
font-weight: 700;
font-size: 1.5rem;
padding: 1.2rem 3rem;
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
box-shadow: 0 10px 25px rgba(255, 107, 0, 0.3);
position: relative;
overflow: hidden;
z-index: 1;
border: none;
cursor: pointer;
text-transform: none;
letter-spacing: 0.5px;
opacity: 0;
animation: ${fadeIn} 0.8s ease-out 0.6s forwards;
max-width: 600px;
margin: 0 auto;

&::before {
content: '';
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: linear-gradient(90deg, #74cf1eff 0%, #1fb800ff 100%);
z-index: -1;
opacity: 0;
transition: opacity 0.3s ease;
}

&:hover {
transform: translateY(-3px) scale(1.02);
box-shadow: 0 15px 30px rgba(255, 107, 0, 0.4);

&::before {
opacity: 1;
}

svg {
transform: translateX(5px);
}
}

&:active {
transform: translateY(1px) scale(0.98);
box-shadow: 0 5px 15px rgba(255, 107, 0, 0.3);
}

svg {
transition: transform 0.3s ease;
font-size: 2rem;
color: white;
}

@media (max-width: 768px) {
width: 90%;
font-size: 1.2rem;
padding: 1rem 1.5rem;

svg {
font-size: 1.8rem;
}
}

@media (max-width: 480px) {
font-size: 1rem;
padding: 0.8rem 1.2rem;

svg {
font-size: 1.5rem;
}
}
`;

export const Note = styled.p`
font-size: 0.95rem;
color: rgba(255, 255, 255, 0.7);
font-style: italic;
margin: 1.5rem 0 0;
text-align: center;
padding: 0.8rem;
background: rgba(0, 0, 0, 0.1);
border-radius: 6px;
border-left: 3px solid #2ecc71;
animation: ${fadeIn} 0.8s ease-out 0.5s both;

@media (max-width: 768px) {
font-size: 0.85rem;
padding: 0.6rem;
margin: 1rem 0 0;
}
  font-style: italic;
  margin: 1.5rem 0 0;
  text-align: center;
  padding: 0.8rem;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  border-left: 3px solid #2ecc71;
  animation: ${fadeIn} 0.8s ease-out 0.5s both;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.6rem;
    margin: 1rem 0 0;
  }
`;