import { theme as defaultTheme } from "styles/theme";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { ReactElement, ComponentType } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, RootState, setupStore } from "redux/store";
import type { PreloadedState } from '@reduxjs/toolkit';

interface CustomOptions extends RenderOptions {
  theme?: DefaultTheme;
  preloadedState?: PreloadedState<RootState>;
}

interface WrapperProps {
  children: JSX.Element;
}

const customRender = (ui: ReactElement, options?: CustomOptions) => {
  const Wrapper = ({ children }: WrapperProps) => {
    return (
      <BrowserRouter>
        <Provider store={options?.preloadedState ? setupStore(options.preloadedState) : store}>
          <ThemeProvider theme={options?.theme || defaultTheme}>
            {children}
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    )
  }

  return rtlRender(ui, { wrapper: Wrapper as ComponentType, ...options });
}

export * from "@testing-library/react";
export { customRender as render };