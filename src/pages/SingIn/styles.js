import styled from "styled-components";
import backgroundImg from '../../assets/loginBackground.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
    padding: 0 16rem;

    display: flex;
    flex-direction: column;
    justify-content: center;  

  > h1 {
    color: ${({ theme }) => theme.colors.PINK};
    font-size: 4.8rem;
    line-height: 6.3rem;
    text-align: left; 
  }

  > p {
    color: ${({ theme }) => theme.colors.GRAY_100};
    font-size: 1.4rem;
    font-weight: 400;

  }

  > h2 {
    font-weight: 500;
    font-size: 2.4rem;
    margin: 4.8rem 0;
  }

  > a {
    color: ${({ theme }) => theme.colors.PINK};
    font-size: 1.6rem;
    text-align: center;
    margin-top: 4.2rem;
  }
`

export const Background = styled.div`
  flex: 1;
  background-image: url(${backgroundImg});
  background-size: cover;
`

