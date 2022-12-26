import { theme as defaultTheme } from "styles/theme";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { ReactElement, ComponentType } from "react";

interface CustomOptions extends RenderOptions {
  theme: DefaultTheme;
}

interface WrapperProps {
  children: JSX.Element;
}

const customRender = (ui: ReactElement, options?: CustomOptions) => {
  const Wrapper = ({ children }: WrapperProps) => {
    return (
      <ThemeProvider theme={options?.theme || defaultTheme}>
        {children}
      </ThemeProvider>
    )
  }

  return rtlRender(ui, { wrapper: Wrapper as ComponentType, ...options });
}

export * from "@testing-library/react";
export { customRender as render };