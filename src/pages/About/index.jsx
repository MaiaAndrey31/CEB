import { Container, ContainerLeft, ContainerRight } from './styles'
import Who from '../../assets/Whole.png'
export default function About() {
  return (
    <Container id='who'>
        <h1>QUEM SOMOS</h1>
        <div>
      
      <ContainerLeft>
        <p>
          O Clube Educacional Beréia foi fundado pela mãe
educadora <span>Alessandra Bernardo</span>. Com o objetivo de
criar um ambiente de aprendizado que vai além do
ensino tradicional. A iniciativa de fundar clube foi
inspirada pela necessidade latente de um ensino
suplementar e por um desejo de implementar
métodos inovadores no ensino.
A missão do Clube Educacional Beréia é promover o
desenvolvimento completo de seus bereanos,
integrando conhecimento geral aos ensinamentos
bíblicos. O CEB busca preparar os bereanos para os
desafios futuros, incentivando a curiosidade, a
criatividade e o pensamento crítico.
O Clube Educacional Beréia representa um esforço
importante na promoção de uma educação mais
abrangente e adaptada às necessidades
contemporâneas dos bereanos. Com uma abordagem
inovadora e compromisso com o desenvolvimento
integral, faz com que sejamos uma instituição valiosa
na paisagem educacional.
        </p>
      </ContainerLeft>
      <ContainerRight>
        <img src= {Who} alt="" />
      </ContainerRight>
      </div>
    </Container>
  )
}
