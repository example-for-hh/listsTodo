import { createGlobalStyle } from 'styled-components';
import MontserratRegular from '@src/fonts/Montserrat/Montserrat-Regular.ttf';
// import MontserratBold from '@src/fonts/Montserrat/Montserrat-Bold.ttf';
import { media } from './breakpoints';

const GlobalStyles = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      font-family: Montserrat, sans-serif;
      font-size: 16px;
    }
    .container {
      inline-size: 100%;
      margin-inline-start: auto;
      margin-inline-end: auto;
      padding-inline-start: 15px;
      padding-inline-end: 15px;
  }
  @font-face {
    font-family: 'MontserratRegular';
    src: url(${MontserratRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  ${media.min.xxl} {
    .container {
        max-inline-size: 720px;
    }
  }

  button {
    margin: 0;
    padding: 0;
    vertical-align: middle;
    border: 0;
    outline: 0;
    background: none;
    color: var(--colorMain);
    text-decoration: none;
    text-transform: none;
    text-align: center;
    line-height: normal;
    white-space: normal;

    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
      margin: 0;
      margin-block-end: 0;
      margin-block-start: 0;
  }

  form {
      position: relative;
      inline-size: 100%;
      block-size: 100%;
  }
  svg {
    cursor: pointer;
  }
  input,
  textarea {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      background: none;
  }


`;

export default GlobalStyles;
