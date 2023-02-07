import { Link } from 'react-router-dom'

import { Container, Avatar } from './style'
import { InputHeader } from '../InputHeader'




export function Header () {
  return(
  <Container>
    <h1>RocketMovies</h1>

    <InputHeader placeholder = "Pesquisar pelo título"/>
    
  <Avatar>
      <div>

        <Link to="profile">
          <h1>Luiz Felipe Bonatto</h1>
        </Link>

        <a href="#">sair</a>
      </div>
      
      <Link to="profile">
        <img src="https://github.com/luizbonatto.png" alt="" /> 
      </Link>

  </Avatar>

  </Container>
  )
}