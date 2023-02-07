import styled from "styled-components";

export const Container = styled.div`
  widows: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px 85px auto;
  grid-template-areas: 
  "header"
  "back"
  "content";
`

export const Back = styled.div`
  grid-area: back;
  margin: 4rem 11.5rem;
`;

export const Form = styled.form`
  grid-area: content;
  margin: 0 11.5rem;
  padding: 0 0.8rem 4rem 0;


> h2 {
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;    
}

> h3 {
  font-weight: 400;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.GRAY_500};
  margin-bottom: 2.4rem;

}

overflow-y: auto;

&::-webkit-scrollbar {
  width: 0.8rem;
  max-height: 10px;
  }

  &::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.colors.PINK};
  border-radius: 8rem;
  }

`

export const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 4rem;
  margin: 4rem 0 3rem 0;

  > div input {
    font-family: 'Roboto', serif;
    padding: 1.6rem;
  }
`

export const Tags = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.BLACK};
  padding: 1.6rem;
  border-radius: 0.8rem;

  display: flex;
  gap: 2.4rem;
`
export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;

  button:nth-child(1){
    background-color: ${({ theme }) => theme.colors.BLACK};
    color: ${({ theme }) => theme.colors.PINK};;
  }

  
`