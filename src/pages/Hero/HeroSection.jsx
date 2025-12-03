import BasicMenu from '../../components/Menu/menu'
import {
  Container,
  ContainerLeft,
  Header,
  ContainerRight,
  ContactContainer,
  Hero,
  HeroContent,
  ContentLeft,
  ContentRight
} from './styles'
import Logo from '../../assets/LogoWide.jpg'

import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import FeedIcon from '@mui/icons-material/Feed'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { theme } from '../../styles/theme'
import QuiltedImageList from '../../components/ImageList'
export function HeroSection() {
  return (
    <Container id="home">
      <Header>
        <ContainerLeft>
          <img src={Logo} alt="" />
          <BasicMenu />
        </ContainerLeft>

        <ContainerRight>
          <ContactContainer>
            <a href="https://www.instagram.com/cebereia/" target="_blank">
              <InstagramIcon style={{ color: theme.colors.blue }} /> INSTAGRAM
            </a>
          </ContactContainer>
          <ContactContainer>
            <a
              href="https://www.youtube.com/@CLUBEEDUCACIONALBEREIA"
              target="_blank"
            >
              <YouTubeIcon style={{ color: theme.colors.blue }} />
              YOUTUBE
            </a>
          </ContactContainer>
          <ContactContainer>
            <a
              href="https://blog.clubeeducacionalbereia.com"
              target="_blank"
            >
              <FeedIcon style={{ color: theme.colors.blue }} />
              BLOG
            </a>
          </ContactContainer>
          <ContactContainer>
            <a href="https://wa.me/+555180881976" target="_blank">
              <WhatsAppIcon style={{ color: theme.colors.blue }} />
              WHATSAPP
            </a>
          </ContactContainer>
        </ContainerRight>
      </Header>
      <Hero>
        <h1>CLUBE EDUCACIONAL BERÉIA</h1>
        <HeroContent>
          <ContentLeft>
            <p>
              <span>‘’</span> Pastoreiem o rebanho de Deus que está aos seus
              cuidados. Olhem por ele, não por obrigação, mas de livre vontade,
              como Deus quer. Não façam isso por ganância, mas com o desejo de
              servir. Não ajam como dominadores dos que lhes foram confiados,
              mas como exemplos para o rebanho. <span>‘’</span>
              <br /> <span>1 PEDRO 5: 2-3</span>
            </p>
          </ContentLeft>
          <ContentRight>
            <QuiltedImageList />
          </ContentRight>
        </HeroContent>
      </Hero>
    </Container>
  )
}
