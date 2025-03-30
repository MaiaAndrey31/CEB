import AccordionExpandIcon from '../../components/Collapse'
import { Container, Content } from './styles'
import Bible from '../../assets/bible.png'
import Identity from '../../assets/id-card.png'
import Brain from '../../assets/brain.png'
import Responsability from '../../assets/reliability.png'
import Logic from '../../assets/logic.png'
import Persuasion from '../../assets/persuasion.png'
import Dialect from '../../assets/meeting.png'

export default function Pillars() {
  return (
    <Container id='pillars'>
      <h1> NOSSOS PILARES</h1>
      <p>
        Os pilares do clube Educacional Beréia estão fundamentados na educação
        bíblica e nos princípios de identidade, raciocínio, responsabilidade,
        lógica, retórica e dialética. Buscamos desenvolver uma formação integral
        dos nossos bereanos, orientada por valores espirituais e éticos,
        enquanto promove o desenvolvimento de habilidades intelectuais e
        sociais.
      </p>

      <Content>
        <AccordionExpandIcon
          icon={Bible}
          header="EDUCAÇÃO BÍBLICA"
          text="O objetivo é integrar valores e ensinamentos bíblicos no processo educativo, guiando os
bereanos a desenvolverem uma visão de mundo fundamentada em princípios espirituais
e éticos. Através do estudo das Escrituras, os alunos são incentivados a refletir sobre
questões morais, espirituais e sociais, buscando aplicar esses princípios em suas vidas

diárias e em suas interações com o mundo."
        />
        <AccordionExpandIcon
          icon={Identity}
          header="IDENTIDADE"
          text="O Clube Educacional Beréia busca auxiliar os nossos bereanos a descobrirem e afirmarem suas
identidades, tanto individual quanto coletiva. Com base na educação bíblica, esse objetivo inclui

a compreensão de que cada aluno é único, com talentos e propósitos específicos. O
desenvolvimento da identidade está ligado ao autoconhecimento e à valorização dos dons
individuais, ao mesmo tempo em que se reconhece o valor de fazer parte de uma comunidade

com crenças e valores compartilhados."
        />
        <AccordionExpandIcon
          icon={Brain}
          header="RACIOCÍNIO"
          text="O objetivo aqui é fortalecer o pensamento crítico e a capacidade de raciocínio dos bereanos.
Através de exercícios e métodos que estimulam o questionamento e a análise, os bereanos
aprendem a construir argumentos sólidos e a resolver problemas com base em princípios
lógicos e informados. Esse desenvolvimento do raciocínio é fundamental para que os bereanos
possam tomar decisões conscientes e fundamentadas em qualquer área de suas vidas."
        />
        <AccordionExpandIcon
          icon={Responsability}
          header="RESPONSABILIDADE"
          text="O desenvolvimento da responsabilidade é um dos pilares da formação de cidadãos éticos e

comprometidos. O Clube Educacional Beréia procura incutir nos bereanos a importância de assumir a
responsabilidade por suas escolhas e ações, promovendo a disciplina, o respeito ao próximo e o
compromisso com a excelência. Esse pilar também está intimamente ligado aos valores bíblicos,
que incentivam os bereanos a serem diligentes, honestos e dedicados em todas as suas atividades."
        />

        <AccordionExpandIcon
          icon={Logic}
          header="LÓGICA"
          text="A lógica é a base para a construção do pensamento estruturado e organizado. Ao trabalhar com
princípios de lógica, o CEB tem o objetivo de ensinar os bereanos a analisarem situações de
maneira ordenada e a resolverem problemas complexos, seja no âmbito intelectual, seja no
cotidiano. A lógica também é essencial para o desenvolvimento de uma fé racional e

fundamentada, onde os bereanos são incentivados a explorar e entender as razões de sua crença."
        />

        <AccordionExpandIcon
          icon={Persuasion}
          header="RETÓRICA"
          text="A retórica foca no desenvolvimento da habilidade de comunicação e de persuasão. O objetivo é que

os nossos bereanos saibam expressar suas ideias e opiniões de maneira clara, coerente e
persuasiva, respeitando a perspectiva dos outros e apresentando seus pontos de vista de forma
construtiva. A prática da retórica é fundamental para que os bereanos possam defender suas
crenças e valores de maneira respeitosa e eficaz, tanto no âmbito acadêmico quanto pessoal."
        />
        <AccordionExpandIcon
          icon={Dialect}
          header="DIALÉTICA"
          text="A dialética está relacionada ao desenvolvimento da capacidade de dialogar, de debater e de
construir conhecimentos em conjunto. O CEB busca ensinar os bereanos a ouvirem e a
respeitarem diferentes pontos de vista, a formularem perguntas e a conduzirem discussões
saudáveis. A dialética permite que os bereanos aprofundem o entendimento de questões
complexas e desenvolvam empatia ao considerar perspectivas diferentes das suas."
        />
      </Content>
      <p>
        Ao integrar esses pilares, o Clube Educacional Beréia pretende formar
        estudantes que são não apenas intelectualmente capacitados, mas também
        espiritualmente fundamentados e socialmente responsáveis. Os objetivos
        de proporcionar uma educação holística baseada nesses princípios são
        formar indivíduos que possam contribuir positivamente para a sociedade,
        com valores bíblicos sólidos e habilidades que os capacitem a pensar de
        maneira crítica, a comunicar-se com clareza e a viver de forma
        responsável e ética.
      </p>
    </Container>
  )
}
