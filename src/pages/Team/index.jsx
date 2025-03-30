import TeamCard from '../../components/TeamCard'
import { Container, Content } from './styles'
import Alessandra from '../../assets/Alessandra.jpg'
import Priscila from '../../assets/priscila.jpg'
import Debora from '../../assets/Debora.jpeg'
import Viviana from '../../assets/Viviana.jpeg'
import Ingrid from '../../assets/Ingrid.jpeg'
import Diana from '../../assets/Diana.jpg'
import Reginaldo from '../../assets/Reginaldo.jpeg'
import Felipe from '../../assets/Felipe.jpeg'
import Gabriele from '../../assets/Gabriele.jpeg'
import GabrieleG from '../../assets/GabrieleG.jpg'



export default function Team() {
  return (
    <Container id='team'>
      <h1>NOSSA EQUIPE</h1>
      <Content>
        <TeamCard
          picture={Alessandra}
          name="Alessandra Bernardo"
          role="Mãe Educadora e Sócia-fundadora
Diretora CEB
Educadora Cristã
Coordenadora do Departamento
Chavales e Peña
Coordenadora CEB Espanhol"
        />
        <TeamCard
          picture={Priscila}
          name="Priscila Simões"
          role="Mãe Educadora e Sócia-fundadora
Vice-diretora CEB
Educadora Cristã
Coordenadora do Departamento
Peques"
        />
        <TeamCard picture={Debora} name="Dra. Débora Morrone" role="Mãe Educadora
Advogada
Especialista em Direito Civil e
Educacional" />
        <TeamCard picture={Viviana} name="Viviana Simões" role="Pedagoga
Educadora Cristã
Missionária Ordenada
Graduanda em Teologia
Coordenadora Pedagógica do
Projeto Viver (Taquara/RS)
Responsável pelo Círculo Navio e
Messias Peques" />
        <TeamCard picture={Ingrid} name="Ingrid Grubinger" role="Mãe Educadora
Educadora Cristã
Missionária Ordenada
Estudante de Pedagogia
Líder do Projeto Viver (Taquara/RS)
Responsável pelo Círculo Messias" />
<TeamCard picture={Felipe} name="Filipe Nascimento" role="Pai Educador
Educador Cristão
Cursando Bacharelado em Teologia e
Licenciatura em Matemática
Fundador do Projeto Ensinando Ciência
Responsável pelo Círculo Sapiencial" />
<TeamCard picture={Diana} name="Diana Santos" role="Mãe Educadora
Auxiliar Administrativa
Responsável pela comunicação e
suporte do Departamento Peques" />
<TeamCard picture={Gabriele} name="Gabriele Sene" role="Bereana e estudante
Auxiliar Administrativa
Responsável pela comunicação e suporte
do Departamento Chavales e Peña e
Departamento Espanhol" />
<TeamCard picture={Reginaldo} name=" Reginaldo Simões" role="Pai educador, formado em teologia pela Escola Charles Spurgeon, educador do Círculo Jonathan." />
<TeamCard picture={GabrieleG} name=" Gabriele Gonçalves" role="Licenciada  em Letras - Português/Literaturas - UFRJ (Universidade Federal do Rio de Janeiro)" />

      </Content>
    </Container>
  )
}
