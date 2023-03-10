import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  borderRadius: '0.5rem',
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
    red: '#CD2C2C',
    orange: '#d87d4a',
    gray: '#f1f1f1',
    light: '#d4d4d4',
    black: "#000",
  },
  background: {
    light: '#fafafa',
    dark: '#191919',
    modal: 'rgba(0, 0, 0, 0.8)',
    white: '#fff',
  },
  breakpoints: {
    lg: '1400px',
    md: '1200px',
    sm: '1000px',
    xs: '600px',
  },
  transitions: {
    fast: '0.1s',
    medium: '0.4s',
    long: '0.8s',
  },
  animations: {
    fade: 'fade',
  },
}