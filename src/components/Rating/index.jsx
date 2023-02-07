import { Container } from "./styles";

import { IoStar, IoStarOutline } from 'react-icons/all'

export function Rating({ grade, isBigSize }) {
  let stars = [];
  for (let cont = 1; cont <= 5; cont++) {
    if (cont <= grade) {
      stars.push(<IoStar key={cont} />);
    } else {
      stars.push(<IoStarOutline key={cont} />);
    }
  }

  return <Container isBigSize={isBigSize}>{stars}</Container>;
}