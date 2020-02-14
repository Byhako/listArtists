import { createGlobalStyle } from 'styles/styled-components';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';

export const colors = {
  palette: {
    black: '#0e0e0e',
    black1: '#151515',
    black2: '#202020',
    black3: '#303030',
    gray: '#626465',
    white: '#fff',
    link: '#63b3f7',
  },
};

loadTheme(colors);

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
