import { createGlobalStyle } from '@xstyled/styled-components';

const MainStyle = createGlobalStyle`
  :root {
    font-size: 9px;
  }

  @media (min-width: 768px) {
    :root {
      font-size: 10px;
    }
  }

  body {
    font-size: 1.4rem;
    font-family: 'Nunito Sans', sans-serif;
  }
`;

export default MainStyle;
