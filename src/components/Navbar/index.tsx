import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Ul, Li, ListText, LogoText } from './styles';
import { toast } from 'react-toastify';

const Navbar: React.FC = () => {
  const handleAlert = () => {
    toast.info('페이지 준비중입니다.', {
      autoClose: 1000
    });
  };
  return (
    <Nav>
      <Ul>
        <Li>
          <LogoText>
            <Link to="/">finda</Link>
          </LogoText>
        </Li>
        <Li>
          <ListText onClick={handleAlert}>오토렌트·리스</ListText>
        </Li>
        <Li>
          <ListText onClick={handleAlert}>신용대출</ListText>
        </Li>
        <Li>
          <ListText onClick={handleAlert}>담보대출</ListText>
        </Li>
        <Li>
          <ListText onClick={handleAlert}>계산기</ListText>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;
