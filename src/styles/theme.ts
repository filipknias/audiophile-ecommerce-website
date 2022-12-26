import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  text: {
    light: 'rgba(255,255,255,0.5)',
    white: '#fff',
    black: '#191919',
    dark: 'rgba(0,0,0,0.5)',
  },
  fonts: {
    light: '300',
    normal: '500',
    bold: '700',
  },
  palette: {
    orange: '#d87d4a',
    gray: '#f1f1f1',
    black: "#000",
  },
  background: {
    light: '#fafafa',
    dark: '#191919',
  },
  breakpoints: {
    lg: '1400px',
    md: '1200px',
    sm: '1000px',
  }
}