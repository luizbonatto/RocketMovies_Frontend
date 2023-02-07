import { Container, Form, Avatar } from './styles'
import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { BackArrow } from '../../components/BackArrow'

export function Profile() {
  return(
    <Container>
      <header>
        <a href="">
          <BackArrow />
        </a>
      </header>

      <Form>

        <Avatar>
          <img 
            src="https://github.com/luizbonatto.png" 
            alt="Foto do Usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera />
            
            <input 
              id ="avatar"
              type = "file"
            />
          </label>

        </Avatar>

      <Input 
        type = "text"
        placeholder = "Nome"
        icon = { FiUser }
      />

      <Input 
        type = "text"
        placeholder = "Email"
        icon = { FiMail }
      />

      <Input 
        type = "password"
        placeholder = "Senha Atual"
        icon = { FiLock }
      />

      <Input 
        type = "password"
        placeholder = "Nova Senha"
        icon = { FiLock }
      />

      <Button  title = "Salvar" />

      </Form>

    </Container>
  )
}