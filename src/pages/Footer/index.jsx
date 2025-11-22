import {
  Container,
  ContainerCenter,
  ContainerLeft,
  ContainerRight,
  Content
} from './styles'

import InstagramIcon from '@mui/icons-material/Instagram'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { theme } from '../../styles/theme'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Logo from '../../assets/Logo.webp'

export default function Footer() {
  return (
    <Container id="contact">
      <ContainerLeft>
        <img src={Logo} alt="" />
        <a href="https://blog.clubeeducacionalbereia.com/" target='_blank'>
          <h2>VISITE NOSSO BLOG</h2>
        </a>
      </ContainerLeft>
      <ContainerCenter>
        <AnchorLink href="#home">
          <p>HOME</p>
        </AnchorLink>
        <AnchorLink href="#who">
          <p>QUEM SOMOS</p>
        </AnchorLink>
        <AnchorLink href="#fusion">
          <p>FUSÃO</p>
        </AnchorLink>
        <AnchorLink href="method">
          <p>METODOLOGIA</p>
        </AnchorLink>
        <AnchorLink href="pillars">
          <p>PILARES</p>
        </AnchorLink>
        <AnchorLink href="circles">
          <p>CÍRCULOS</p>
        </AnchorLink>
        <AnchorLink href="help">
          <p>SERVIÇOS</p>
        </AnchorLink>
        <AnchorLink href="team">
          <p>EQUIPE</p>
        </AnchorLink>
      </ContainerCenter>
      <ContainerRight>
        <Content>
          <a href="https://www.instagram.com/cebereia/" target="_blank">
            <InstagramIcon
              style={{
                fontSize: 30,
                color: `${theme.colors.blue}`,
                fontWeight: 'bold'
              }}
              className="icon"
            />
            <p>INSTAGRAM</p>
          </a>
        </Content>
        <Content>
          <a href="https://wa.me/+5551999606156" target="_blank">
            <PhoneIcon
              style={{
                fontSize: 30,
                color: `${theme.colors.blue}`,
                fontWeight: 'bold'
              }}
            />
            <p>CONTATO</p>
          </a>
        </Content>
        <Content>
          <a href="mailto:contatocebereia@gmail.com">
            <EmailIcon
              style={{
                fontSize: 30,
                color: `${theme.colors.blue}`,
                fontWeight: 'bold'
              }}
            />
            <p>EMAIL</p>
          </a>
        </Content>
        <Content>
          <a
            href="https://www.youtube.com/@CLUBEEDUCACIONALBEREIA"
            target="_blank"
          >
            <YouTubeIcon
              style={{
                fontSize: 30,
                color: `${theme.colors.blue}`,
                fontWeight: 'bold'
              }}
            />

            <p>YOUTUBE</p>
          </a>
        </Content>
      </ContainerRight>
    </Container>
  )
}
