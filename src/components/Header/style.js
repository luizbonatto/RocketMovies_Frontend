import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  grid-area: header;
  padding: 2.4rem 12.3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY_200}; ;

  > h1 {
    color: ${({ theme }) => theme.colors.PINK};
    font-size: 2.4rem;
    line-height: 3.2rem;
    margin-right: 6.4rem;
  }
`

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-left: 6.4rem;
  min-width: 19.8rem;

  >div {
    width: 100%;
    display: flex;
    flex-direction: column;

  > a h1 {
    font-size: 1.4rem; 
    text-align: right;
    color:${({ theme }) => theme.colors.WHITE};
    }
    
  > a {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.GRAY_300};
    text-align: right;
    }  
  }

  > a img {
    height: 5.6rem;
    width: 5.6rem;
    border-radius: 50%;
  }

`