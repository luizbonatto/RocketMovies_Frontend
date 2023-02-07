import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px 80px auto;
  grid-template-areas: 
  "header"
  "back"
  "content";  
  `;

export const Content = styled.div`
  grid-area: content;
  margin: 0 11.5rem; 
  padding: 0 0.8rem 4rem 0;

  overflow-y: auto;

  &::-webkit-scrollbar {
  width: 0.8rem;
  max-height: 10px;
  }

  &::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.colors.PINK};
  border-radius: 8rem;
  }
`;

export const Back = styled.div`
  grid-area: back;
  margin: 4rem 11.5rem;
`;

export const MovieName = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 19px;
  margin-bottom: 2.4rem;

  > h2 {
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;    
  }
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;

    > img {
      height: 1.6rem;
      width: 1.6rem;
      border-radius: 50%;
    }

    > p {
      font-family: 'Roboto';      
    }

    > svg {
      margin-left: .2rem;
      color: ${({ theme }) => theme.colors.PINK}
    }
`;

export const Tags = styled.div`
  display: flex;
  margin: 4rem 0;

  > span{
    background-color: ${({ theme }) => theme.colors.BACKGROUND_1100};
  }
`;

export const MovieDescription = styled.div`
    text-align: justify;
`;
