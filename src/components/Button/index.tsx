import React from 'react';
import { buttonProps } from '../../interface';

const Button = ({ buttonText }: buttonProps) => {
  return (
    <>
      <button className="main_btn" id="post-new-btn">
        {buttonText}
      </button>
    </>
  );
};

export default Button;
