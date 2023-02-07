import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.PINK};
  color: ${({ theme }) => theme.colors.BACKGROUND_1000};
  padding: 0 1.6rem;
  height: 56px;
  border: none;
  margin-top: 1.6rem;
  border-radius: 1rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;

