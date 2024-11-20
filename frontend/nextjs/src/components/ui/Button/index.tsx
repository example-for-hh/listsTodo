import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { ButtonHTMLAttributes } from 'react';

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string | React.ReactNode;
  typeText?: boolean;
  modal?: boolean;
};

type TBtn = {
  $typeText?: boolean;
  $modal?: boolean;
};

const StyledButton = styled.button<TBtn>`
  padding: 10px;
  background: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  transition:
    transform 1s ease,
    background-color 0.2s ease;

  ${props =>
    props.$typeText &&
    css`
      padding: 0;
      background: none;
      color: #000;
      text-decoration: underline;
    `}

  ${props =>
    props.$modal &&
    css`
      position: absolute;
      top: 0;
      right: -50px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background: #fff;

      &:hover {
        transform: rotate(360deg);
        background: #000;
        svg {
          fill: #fff;
        }
      }
      svg {
        width: 20px;
        height: 20px;
        fill: #000;
      }
    `}
`;

const ButtonSpan = styled.span`
  padding: 0;
  background: none;
`;

const Button: FC<TButtonProps> = ({
  typeText = false,
  modal = false,
  text,
  children,
  ...rest
}) => {
  const { type = 'button', ...attr } = rest;

  return (
    <StyledButton {...attr} type={type} $typeText={typeText} $modal={modal}>
      {text && <ButtonSpan>{text}</ButtonSpan>}
      {children}
    </StyledButton>
  );
};

export default Button;
