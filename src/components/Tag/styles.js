import styled from "styled-components";

export const Container = styled.span`
  padding: .5rem 1.6rem;
  border-radius: .8rem;

  color: ${({ theme }) => theme.colors.GRAY_400};
  background-color: ${({ theme }) => theme.colors.BACKGROUND_1000};

  font-size: 1.4rem;
  font-family: 'Roboto', sans-serif;
  margin-right: 8px;
`;
