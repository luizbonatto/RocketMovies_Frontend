import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px 1fr;
  grid-template-areas: 
  "header"
  "content";
  `;


export const Content = styled.div`
  grid-area: content;
  margin: 50px 114px; 
  overflow: hidden;
`

export const AddFilm = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.8rem;

  > h1 {
    width: 100%;
    font-weight: 400;
    font-size: 3.2rem;    
  }

  > a {
    display: flex;
    align-items: center;  
    justify-content: center;
    gap: 8px;

    background-color: ${({ theme }) => theme.colors.PINK};
    color: ${({ theme }) => theme.colors.BACKGROUND_1000};

    padding: 13.5px  32px 14px 32px;
    border-radius: 8px;
    white-space: nowrap;

    > svg {
        width: 20px;
        height: 20px;
        margin-top: 1px;
    }    
  }  
`;

export const Notes = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: auto;
  padding-right: 0.8rem;
  padding-bottom: 10rem;

&::-webkit-scrollbar {
  width: 0.8rem;
  max-height: 10px;
}

&::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.colors.PINK};
  border-radius: 8rem;

}
`;

