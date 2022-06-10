import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { ApplicationState } from '@sellis/application-state';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1760a5',
      light: 'skyblue'
    },
    secondary: {
      main: '#15c630'
    },
    customColor: {
      main: 'black',
      light: 'skyblue',
      dark: 'darkblue',
      contrastText: '#1760a5'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1100,
      xl: 1536
    }
  }
});

export interface AppRootProps {
  children: any;
}

export const AppRoot = (props: AppRootProps) => {
  const { children } = props;

  return (
    <ApplicationState>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
      </ThemeProvider>
    </ApplicationState>
  );
}
