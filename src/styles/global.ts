import styled, { createGlobalStyle } from 'styled-components';

// 전체 style 적용
export default createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: Spoqa Han Sans Neo,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
   }
   #app{
       margin:0 auto;
   }
`;
export const Container = styled.div`
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;
  @media only screen and (max-width: 600px) {
    padding: 0 10px;
  }
  @media (max-width: 991px) {
    padding: 0 30px;
  }
  @media (min-width: 1500px) {
    max-width: 1500px;
  }
  @media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 30px;
  }
`;
