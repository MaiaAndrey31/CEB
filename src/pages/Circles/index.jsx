import BasicTabs from '../../components/Tab'
import VerticalTabs from '../../components/Tab2'
import { Container, Content } from './styles'

export default function Circles() {
  return (
    <Container id='circles'>
      <h1>CÍRCULOS</h1>
      <p className='textCircle'>Inspirados
      no Trivium e no Quadrivium, os círculos de aprendizagem competem as áreas
de conhecimento que o CEB se propõe a
desenvolver com os nossos bereanos. </p>

      <h2>GRUPO PEQUES (06-09 ANOS)<br /></h2>

      <Content><BasicTabs /></Content>

      <h2>CHAVALES (10-13 ANOS) E PEÑA (14-17 ANOS)</h2> 

      <Content><VerticalTabs/></Content>
      
    </Container>
  )
}
