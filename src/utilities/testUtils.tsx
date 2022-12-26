import { theme as defaultTheme } from "styles/theme";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { ReactElement, ComponentType } from "react";
import { BrowserRouter } from "react-router-dom";

interface CustomOptions extends RenderOptions {
  theme: DefaultTheme;
}

interface WrapperProps {
  children: JSX.Element;
}

const customRender = (ui: ReactElement, options?: CustomOptions) => {
  const Wrapper = ({ children }: WrapperProps) => {
    return (
      <BrowserRouter>
        <ThemeProvider theme={options?.theme || defaultTheme}>
          {children}
        </ThemeProvider>
      </BrowserRouter>
    )
  }

  return rtlRender(ui, { wrapper: Wrapper as ComponentType, ...options });
}

export * from "@testing-library/react";
export { customRender as render };