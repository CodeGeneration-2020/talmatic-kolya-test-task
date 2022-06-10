import React, { FC, ReactNode } from "react";
import {
  createTheme,
  responsiveFontSizes,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 475,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: "#B9B9B9",
      light: "#E8E8E8",
      dark: "#D0D0D0",
    },
    secondary: {
      main: "#171717",
    },
  },
  spacing: [0, 4, 8, 12, 16, 24, 36],
});

interface IAppThemeProps {
  children?: ReactNode;
}

const AppTheme: FC<IAppThemeProps> = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </StyledEngineProvider>
);

export default AppTheme;
