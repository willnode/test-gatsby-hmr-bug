import { createTheme, ThemeProvider } from '@material-ui/core';
import * as React from "react";
export const primaryColor = '#fbc02d';

export const themeOptions = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#fbc02d',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const withTheme = (Child) =>  {
  return () => (
      <ThemeProvider theme={themeOptions}>
        <Child />
      </ThemeProvider>
  );
}

export default withTheme;