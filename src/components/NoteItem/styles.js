import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  

  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.colors.BACKGROUND_900};
  color: ${({ theme, isNew }) => isNew ? theme.colors.WHITE : theme.colors.GRAY_300};

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.colors.GRAY_300}`: "none"};

  padding-right: 1.2rem;
  border-radius: 1rem;

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.PINK}
  }

  > input { 
    width: 200%;
    padding: 1.6rem;
    color: ${({theme}) =>  theme.colors.WHITE};
    background: transparent;
    font-family: "Roboto", serif;

    border: none;

    &::placeholder {
      color: ${({theme}) =>  theme.colors.GRAY_300};
    }

  }

`