import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;

  background-color: ${({ theme }) => theme.colors.BACKGROUND_900};
  color: ${({ theme }) => theme.colors.GRAY_300};

  border: none;
  resize: none;

  margin-bottom: 4rem;
  padding: 1.6rem;
  border-radius: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.GRAY_300};

  font-family: 'Roboto', serif;

  }

`