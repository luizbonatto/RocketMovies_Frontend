import { Container, Back, Form, Inputs, Tags, Buttons } from "./styles";

import { Header } from '../../components/Header'
import { BackArrow } from '../../components/BackArrow'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { NoteItem } from '../../components/NoteItem'

export function New() {
  return(
    <Container>
      <Header />

      <Back>
        <BackArrow />
      </Back>

      <Form>

        <h2>Novo Filme</h2>

        <Inputs>
        <Input 
          type="text"
          placeholder = "Título"
        />
        <Input 
          type="number"
          placeholder = "Insira sua nota (de 0 a 5)"
        />
        </Inputs>

        <TextArea placeholder="Observações" />

        <h3>Marcadores</h3>

        <Tags>

          <NoteItem 
            value = "React"
          />
          <NoteItem
            isNew
            placeholder = "Novo Marcador"
          />

        </Tags>

        <Buttons>
          <Button title="Excluir filme" />
          <Button title="Salvar alterações" />

        </Buttons>

      </Form>

    </Container>
  )
}