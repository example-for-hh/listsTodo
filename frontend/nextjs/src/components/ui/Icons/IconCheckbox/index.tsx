import { TIconSvg } from '@src/types';
import { FC } from 'react';
import styled from 'styled-components';

const Checkmark = styled.svg`
  display: block;
  width: 36px;
  height: 36px;
  transform-origin: 50% 50%;
  border-radius: 50%;
  stroke-width: 5;
  stroke: #2aff00;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  cursor: pointer;
`;

const CheckmarkCircle = styled.circle`
  stroke: rgb(0 0 0 / 20%);
  stroke-width: 1px;
  stroke-dasharray: 0;
  fill: none;
`;

const IconCheckbox: FC<TIconSvg> = ({ ...rest }) => {
  return (
    <>
      <Checkmark
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
        {...rest}>
        <CheckmarkCircle cx="26" cy="26" r="25" fill="none" />
        <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
      </Checkmark>
    </>
  );
};

export default IconCheckbox;
