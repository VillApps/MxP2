/* eslint-disable import/no-named-as-default */
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import { blueGrey, grey, teal } from '@mui/material/colors';
import { Theme, ThemeProvider as AmpThemeProvider } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { Provider } from 'react-redux';
import { App } from './App';
import config from '../aws-exports';
import { store } from './States/Store';

Amplify.configure(config);

const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: {
      main: grey[50],
    },
    info: {
      main: blueGrey[300],
    },
    success: {
      main: teal[800],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiFilledInput: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiFormControl: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiInputBase: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiInputLabel: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiListItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiFab: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTable: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTextField: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiToolbar: {
      defaultProps: {
        variant: 'dense',
      },
    },
  },
});

const Amptheme: Theme = {
  name: 'VillApps theme',
  tokens: {
    colors: {
      primary: {
        '10': '#777',
        '80': '#444',
        '90': '#333',
        '100': '#222',
      },
    },
  },
};

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AmpThemeProvider theme={Amptheme}>
        <App />
      </AmpThemeProvider>
    </ThemeProvider>
  </Provider>,
);
