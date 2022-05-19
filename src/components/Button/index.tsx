import React from 'react';
import { ButtonStyle } from './styles';
import { buttonProps } from '../../interface';

const Button = ({ buttonText }: buttonProps) => {
  return (
    <>
      <ButtonStyle>{buttonText}</ButtonStyle>
    </>
  );
};

export default Button;
