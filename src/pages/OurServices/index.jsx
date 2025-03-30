import { Container, ContainerLeft, ContainerRight, Content } from './styles'

export default function OurServices() {
  return (
    <Container id='help'>
      <h1>APOIO ÀS FAMÍLIAS EDUCADORAS</h1>
      <Content>
        <ContainerLeft>
          <img
            src="https://images.unsplash.com/photo-1629360021730-3d258452c425?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </ContainerLeft>{' '}
        <ContainerRight>
          <h2>
            Estamos trabalhando para oferecer mais suporte às nossas famílias
            que decidiram educar seus filhos de maneira integral.
          </h2><br/><br/>

          <h3>Mas vocês já podem contar com os seguintes serviços:</h3><br/>

          <p>
            ✅ Certificado de matrícula<br/>  ✅ Assistência Jurídica<br/>  ✅ Relatórios de
            Frequência<br/>  ✅ Avaliações Formalizadas<br/>  ✅ Envio Diário de Materiais 
          </p><br/><br/>
          <h3>Também
            oferecemos o serviço de consultoria HS: </h3><br/>
            <p> ✅ Entrevista Inicial<br/>  ✅ Sugestão
            de um plano personalizado<br/>  ✅ Ajuste do plano e serviço de orientação
            jurídica com a Dra. Débora Morrone.<br/>  ✅ Indicação de materiais, livros e
            programas de apoio.</p>
        </ContainerRight>
      </Content>
    </Container>
  )
}
