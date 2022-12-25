import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    text: {
      light: string;
      white: string;
      black: string;
    },
    palette: {
      orange: string;
      gray: string;
    },
    background: {
      light: string;
      dark: string;
    }
  }
}