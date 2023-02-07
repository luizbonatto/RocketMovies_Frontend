import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Container, Form, Background } from "./styles";
import { Link } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function SingUp() {
  return (
    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie Sua Conta</h2>

        <Input 
          type = "text"
          placeholder = "Nome"  
          icon = {FiUser}
        />

        <Input 
          type = "text"
          placeholder = "E-mail"  
          icon = {FiMail}
        />

        
        <Input 
          type = "password"
          placeholder = "Senha"  
          icon = {FiLock}
        />

        <Button title ="Cadastrar" />

        <Link to="/"> <FiArrowLeft /> Voltar para o login </Link>

      </Form>

      <Background />
    
    </Container>

  )
}