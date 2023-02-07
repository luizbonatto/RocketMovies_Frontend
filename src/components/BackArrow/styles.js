import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  color: ${({ theme }) => theme.colors.PINK};
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    color: ${({ theme }) => theme.colors.PINK};
    font-size: 18px;
  }
`