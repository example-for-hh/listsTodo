import { FC } from 'react';
import styled, { css, CSSProp } from 'styled-components';

type TitleProps = {
  title: string | React.ReactNode;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const headingStyles: {
  [key in 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6']: CSSProp;
} = {
  h1: css`
    font-size: 2em;
    color: #bf4f74;
  `,
  h2: css`
    font-size: 1.75em;
    color: #4f74bf;
  `,
  h3: css`
    font-size: 1.5em;
    color: #74bf4f;
  `,
  h4: css`
    font-size: 1.25em;
    color: #4f4fbf;
  `,
  h5: css`
    font-size: 1em;
    color: #bf4fbf;
  `,
  h6: css`
    font-size: 0.875em;
    color: #4fbf74;
  `,
};

const StyledTitle = styled.h1<{ as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }>`
  ${props => headingStyles[props.as as keyof typeof headingStyles]}
`;

const Title: FC<TitleProps> = ({ title, type }) => {
  return <StyledTitle as={type}>{title}</StyledTitle>;
};

export default Title;
