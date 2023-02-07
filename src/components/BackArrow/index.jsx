import { Container } from "./styles";
import { FiArrowLeft } from 'react-icons/fi'

export function BackArrow () {
  return (
  <Container to="/" >
    <FiArrowLeft />
     Voltar
  </Container>
  )
}