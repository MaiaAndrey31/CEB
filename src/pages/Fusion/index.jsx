import { Container, ContainerLeft, ContainerRight, Content } from './styles'
import App from '../../components/Carousel'

export default function Fusion() {
  return (
    <Container id='fusion'>
      <h1> FUSÃO </h1>

      <Content>
      <ContainerRight>
        <App />
      </ContainerRight>
      <ContainerLeft>
        <p className='main'><span>‘’</span> Em um mundo cada vez mais globalizado e colaborativo, a capacidade de
          interagir com pessoas de diferentes realidades educacionais torna-se
          essencial. A fusão entre alunos homeschoolers e escolares permite a
          criação de uma comunidade educativa mais inclusiva e diversificada,
          onde a educação deixa de ser apenas uma questão de método e passa a
          ser um processo de troca constante e enriquecedora. <span>‘’</span>
        </p>
        <br />

        <p className='footerText'>
        <span className='second'>‘’</span> E consideremos uns aos outros para nos incentivarmos ao
amor e às boas obras. Não deixemos de reunir-nos como
igreja, segundo o costume de alguns, mas procuremos
encorajar-nos uns aos outros, ainda mais quando vocês

veem que se aproxima o Dia<span className='second'>‘’</span>.<br /><br />

<span className='second'>Hebreus 10:24 - 25</span>
        </p>


      </ContainerLeft>

      
      </Content>
    </Container>
  )
}
