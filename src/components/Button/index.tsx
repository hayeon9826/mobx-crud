import React from 'react';
import { buttonProps } from '../../interface';

const Button = ({ buttonText }: buttonProps) => {
  return (
    <>
      <button
        className="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-200 font-medium rounded-md text-md px-8 py-2 mr-2 dark:bg-indigo-600 dark:hover:bg-indigo-500 focus:outline-none dark:focus:ring-indigo-600"
        id="post-new-btn">
        {buttonText}
      </button>
    </>
  );
};

export default Button;
