import styled from "styled-components";

export const Container = styled.div`
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  border-radius: 1.6rem;

  background-color: ${({ theme }) => theme.colors.BACKGROUND_1100};

  margin-bottom: 2.4rem;

  > p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.GRAY_500};

    height: 4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: normal;

    margin-bottom: 1rem;    
  }

  > footer {
    display: flex;
    width: 100%;
  }

`

export const NameTag = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;

  > h1{
    font-size: 2.4rem;
  }
  
`

