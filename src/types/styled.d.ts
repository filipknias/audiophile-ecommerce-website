import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    text: {
      light: string;
      white: string;
      black: string;
      dark: string;
    },
    fonts: {
      light: string;
      normal: string;
      bold: string;
    },
    palette: {
      orange: string;
      gray: string;
      black: string;
    },
    background: {
      light: string;
      dark: string;
    },
    breakpoints: {
      lg: string;
      md: string;
      sm: string;
    }
  }
}