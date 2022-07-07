import * as React from 'react';
import { red } from '@mui/material/colors';
import { ThemeProvider as MuiThemeProvider, createTheme, Direction } from '@mui/material/styles';

export const themeObj = {
  direction: 'rtl' as Direction,
  typography: {
      fontFamily: [
          'Iran Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
      ].join(','),
  },
  palette: {
      primary: {
          main: '#1062D0',
          seconary: '#1062D0',
      },
      success: {
        main: '#24AF22',
      },
      error: {
          main: '#EB5757',
      },
      warning: {
        main: '#D68000'
      },
      text: {
          primary: '#1A1919',
          secondary: '#6F6F6F',
          disabled: '#AEAEAE'
      },
      disabled: {
          main: '#6F6F6F',
          light: '#f6f6fa'
      }
  },
  shape: {
    borderRadius: '8px'
  }
  
}

const theme = createTheme(themeObj);

declare module '@mui/material/styles' {
    interface Palette {
      disabled: Palette['primary'];
    }
  
    // allow configuration using `createTheme`
    interface PaletteOptions {
      disabled?: PaletteOptions['primary'];
    }
  }
  
  // Update the Button's color prop options
  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      disabled: true;
    }
  }
  
  // Update the Button's color prop options
  declare module '@mui/material/SvgIcon' {
    interface SvgIconPropsColorOverrides {
      disabled: true;
    }
  }


const ThemeProvider = ({ children }: ChildrenPropType) => {
    return (
        <MuiThemeProvider theme={theme}>
            {children}
        </MuiThemeProvider>
    )
}

export default ThemeProvider