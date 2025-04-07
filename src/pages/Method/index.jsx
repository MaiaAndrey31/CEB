import App from '../../components/Card'
import { Container, Content } from './styles'

export default function Method() {
  return (
    <Container id='method'>
      <h1>NOSSA METODOLOGIA</h1>

      <p className='intro'>
        A metodologia do Clube Educacional Beréia é fundamentada em uma
        abordagem bíblica, cristã e pedagógica, visando proporcionar uma
        educação integral que envolve o desenvolvimento espiritual, cognitivo,
        social e emocional dos estudantes. O foco do CEB é, preparar os bereanos
        para enfrentar os desafios da vida com base em valores bíblicos e em
        princípios éticos, além de estimular a autonomia e a responsabilidade.
      </p>

      <Content>
        <h2>EDUCAÇÃO CRISTÃ</h2>
        <div>
          <App className='card' 
            titles="FUNDAMENTO BÍBLICO"
            content="A Bíblia é central
na formação do caráter e da ética dos
bereanos. O ensino de princípios
cristãos é incorporado nos encontros e
nas atividades diárias, incentivando os
bereanos a aplicar esses valores na
prática."
          />
          <App className='card'
            titles="ESPIRITUALIDADE"
            content="O clube promove
momentos de oração, estudo bíblico e
reflexão, para nutrir a espiritualidade
dos alunos e sua relação com Deus."
          />
        </div>
        <h2>ENSINO RESPEITOSO</h2>
        <div>
          <App className='card'
            titles="RESPEITO AO RITMO DO ESTUDANTE"
            content="O
método respeita o tempo e o ritmo de
aprendizagem de cada bereano. Há um
foco em atender as necessidades
individuais, com suporte personalizado e
acompanhamento constante para
garantir o sucesso acadêmico e pessoal."
          />
          <App className='card'
            titles="AUTONOMIA"
            content="Os bereanos são
incentivados a assumir responsabilidade
pelo seu próprio aprendizado,
desenvolvendo habilidades de
autogestão, como planejamento,
pesquisa e organização."
          />
        </div>
        <h2>AUTONOMIA E ESTÍMULO AO PENSAMENTO CRÍTICO</h2>
        <div>
          <App className='card'
            titles="PESQUISA E INVESTIGAÇÃO"
            content="A metodologia promove a investigação, questionamento e a
busca por respostas. A ideia é cultivar a curiosidade natural dos bereanos, incentivando-
os a explorar novas ideias e conceitos de maneira ativa."
          />
          <App className='card'
            titles="DESENVOLVER O PENSAMENTO CRÍTICO"
            content="O estímulo ao raciocínio lógico e a
capacidade de avaliar informações e situações faz parte da proposta educativa do CEB.
O foco é preparar os nossos bereanos para tomar decisões informadas e éticas."
          />
        </div>
        <h2>ENSINO MULTIDICIPLINAR</h2>
        <div>
          <App className='card'
            titles="INTEGRAR ÁREAS DO CONHECIMENTO"
            content="O CEB
adota uma metodologia que integra diversas
disciplinas, relacionando temas bíblicos,
sociais, científicos e culturais. Isso permite aos
bereanos uma visão mais holística do mundo."
          />
          <App className='card'
            titles="PROJETOS INTERDISCIPLINARES"
            content="A realização de
projetos que envolvem várias áreas do
conhecimento ajuda os bereanos a
compreender a interconexão dos temas e a
aplicar o aprendizado em situações reais."
          />
        </div>
        <h2>AMBIENTE COLABORATIVO</h2>
        <div>
          <App className='card'
            titles="TRABALHO EM EQUIPE"
            content="A colaboração entre
os bereanos é incentivada por meio de
atividades que requerem cooperação,
respeito mútuo e troca de ideias."
          />
          <App className='card'
            titles="RESOLUÇÃO DE CONFLITOS"
            content="A convivência em
um ambiente cristão promove o
desenvolvimento de habilidades sociais e
emocionais, como empatia, comunicação e
resolução de conflitos de maneira pacífica."
          />
        </div>
        <h2>FORMAÇÃO INTEGRAL</h2>
        <div>
          <App className='card'
            titles="DESENVOLVER O EMOCIONAL E SOCIAL"
            content="Além do conhecimento acadêmico, o CEB valoriza o
desenvolvimento das competências socioemocionais dos bereanos preparando-os para se
tornarem cidadãos conscientes, responsáveis e éticos."
          />
          <App className='card'
            titles="EDUCAÇÃO PARA A VIDA"
            content="A formação inclui aspectos práticos e úteis para o cotidiano, como
habilidades de liderança, comunicação eficaz, gestão de tempo e tomada de decisões."
          />
        </div>
        <h3>Esses aspectos formam a base do modelo educativo do Clube Educacional Beréia, buscando
desenvolver indivíduos com sólidos princípios morais e preparados intelectualmente para os
desafios do mundo moderno.</h3>
      </Content>
    </Container>
  )
}
