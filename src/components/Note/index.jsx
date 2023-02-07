import { Container, NameTag } from "./styles";

import { Rating } from '../../components/Rating'
import { Tag } from '../Tag'

export function Note ({data, ...rest }){
  return(
    <Container>

        <NameTag>
        <h1> {data.title} </h1>
        <Rating grade={data.rating} isBigSize={false} />
        </NameTag>       

        <p> { data.description } </p>

        {
          data.tags &&
          <footer>
            {
              data.tags.map(tag => <Tag key = {tag.id} title = {tag.name}/>)
            }

          </footer>
        }
    </Container>
  )
}