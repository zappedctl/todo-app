import { createGlobalStyle } from '@xstyled/styled-components';

const ResetStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  a {
    color: unset;
    text-decoration: none;
  }
`;

export default ResetStyles;
