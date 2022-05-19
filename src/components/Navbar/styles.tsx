import styled from 'styled-components';

export const Nav = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  color: #4f63d2;
  box-sizing: border-box;
  height: 56px;
  background-color: #ffffff;
  border-bottom: 1px solid #e9e9e9;
  border-color: #e9e9e9;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const Ul = styled.ul`
  list-style-type: disc;
  display: flex;
  margin-block: 0px;
  margin-inline: 0px;
  padding-inline-start: 0px;
  margin: 0px;
  padding: 0px;
`;

export const Li = styled.li`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0 32px;
  cursor: pointer;
`;

export const ListText = styled.a`
  @media only screen and (max-width: 600px) {
    display: none;
  }
  font-size: 15px;
  text-align: left;
  font-weight: normal;
  color: #303030;
  line-height: 1.56;
  margin: 0px 10px;

  &:hover {
    border-bottom: 2px solid rgb(79, 99, 210);
    font-weight: bold;
    color: rgb(79, 99, 210);
  }
`;

export const LogoText = styled.h2`
  font-family: revert, system-ui;
  a {
    color: #4f63d2;
    text-decoration: none;
  }
`;
