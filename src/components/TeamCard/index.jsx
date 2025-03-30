import { Container,  } from "./styles";
import PropTypes from 'prop-types'

export default function TeamCard({picture, name, role}){
    return(
        <Container
        >
           
           <img src={picture} alt="" />
            <h6>{name}</h6>
            <p>{role}</p>
          
        </Container>
    )
}


TeamCard.propTypes = {
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
  }