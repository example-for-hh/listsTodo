import { FC } from 'react';
import { styled } from 'styled-components';

type TFormControlProps = {
  children: React.ReactNode;
};

const FormControlStyled = styled.div`
  position: relative;
  width: 100%;
  &:only-child {
    margin: 0;
  }
  &:first-child {
    margin-bottom: 15px;
  }

  &:last-child {
    margin-top: 15px;
  }

  &:not(:first-child):not(:last-child) {
    margin: 15px 0;
  }
`;

const FormControl: FC<TFormControlProps> = ({ children }) => {
  return <FormControlStyled>{children}</FormControlStyled>;
};

export default FormControl;
