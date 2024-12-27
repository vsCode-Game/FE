import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


  :root {
    background-color: #fff;
    /* color */
    --color-primary: #44FF92;
    --color-secondary: #2571FF;
    --color-rose: #FF5E5E;
    --color-warning: #FF5E5E;
    --color-yellow-100: #FFF740;
    --color-yellow-500: #FFFBA6;
    --color-yellow-900: #FFFDD7;
    --color-gray-0: #FFFFFF;
    --color-gray-100: #F8F8F8;
    --color-gray-200: #E4E4E4;
    --color-gray-300: #C5C5C5;
    --color-gray-400: #949494;
    --color-gray-500: #7F7F7F;
    --color-gray-600: #6C6C6C;
    --color-gray-700: #454545;
    --color-gray-800: #232323;
    --color-gray-900: #121212;
    --color-gray-999: #000000;
    --shadow: 1px 1px 5px 0 rgba(176, 176, 176, 0.5);
    --radius-sm: 12px;
    --radius-md: 14px;
    --radius-lg: 50%; 
  }

  *{
    box-sizing: border-box;
  }
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  li {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    all: unset;
    cursor: pointer;
  }
  input {
    background: none;
    border: 0;
  }
  input:focus {
    outline: none;
  }
  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  vertical-align: top;
}

  body {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-text-size-adjust: none; /* Chrome, Safari, Opera */
  -ms-text-size-adjust: none; /* IE */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  height: 100%; /* Prevent vertical bounce and set height to full view */
  margin: unset;
  padding: unset;
}
`;

export default GlobalStyles;
