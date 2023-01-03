import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
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
      red: string;
      orange: string;
      gray: string;
      light: string;
      black: string;
    },
    background: {
      light: string;
      white: string;
      dark: string;
      modal: string;
    },
    breakpoints: {
      lg: string;
      md: string;
      sm: string;
      xs: string;
    },
    transitions: {
      fast: string;
      medium: string;
      long: string;
    },
    animations: {
      fade: string;
    }
  }
}