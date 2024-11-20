import { FC, InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  children?: React.ReactNode;
  error?: boolean;
};

const InputStyled = styled.input`
  width: 100%;
  padding: 21px 0;
  border-bottom: 1px solid #000;
  background: #fff;
`;

const Input: FC<InputProps> = ({ error = false, ...rest }) => {
  const { children, ...attr } = rest;

  return (
    <>
      <InputStyled {...attr} />
      {children}
    </>
  );
};

export default Input;
