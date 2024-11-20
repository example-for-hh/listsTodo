import { FC } from 'react';
import { styled } from 'styled-components';
import { ErrorMessage } from 'formik';

const Error = styled.div`
  position: absolute;
  right: 0;
  bottom: -15px;
  color: #ff0000;
  font-size: 12px;
`;

const FormError: FC<{ name: string }> = ({ name }) => {
  return (
    <>
      <Error>
        <ErrorMessage name={name} />
      </Error>
    </>
  );
};

export default FormError;
