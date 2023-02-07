import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.BACKGROUND_900};
  color: ${({ theme }) => theme.colors.GRAY_300};

  border-radius: 1rem;

  > input {
    height: 5.6rem;
    width: 100%;
    font-size: 1.4rem;

    padding: 1.9rem 2.4rem ;
    color: ${({ theme }) => theme.colors.WHITE};
    background: transparent;
    border: none;

    &::placeholder{
      color: ${({ theme }) => theme.colors.GRAY_300};
    }
  }

  > svg {
    margin-left: 1.6rem;
  }

`