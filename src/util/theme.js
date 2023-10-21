import { createTheme } from '@mui/material/styles'

const defaultFontSize = 14

const calcFontSize = (expectedBodyFontSize) => {
  return (12 / 14) * expectedBodyFontSize
}

export const theme = createTheme({
  typography: {
    fontFamily: '"Segoe UI"',
    fontSize: calcFontSize(defaultFontSize),
    caption: {
      fontSize: calcFontSize(defaultFontSize),
    },
    h1: {
      fontSize: calcFontSize(defaultFontSize * 2.6),
      fontWeight: 'bold',
      marginBottom: '40px',
    },
    h3: {
      fontSize: calcFontSize(defaultFontSize * 1.8),
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    h4: {
      fontSize: calcFontSize(defaultFontSize * 1.4),
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    h6: {
      fontWeight: 'bold',
      margin: '0px 0px',
    },
    button: {
      fontWeight: 'bold',
    },
  },
  palette: {
    primary: {
      main: '#48277C',
    },
    text: {
      primary: '#000000',
    },
    success: {
      main: '#5591f2',
    },
    info: {
      main: '#f25555',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
})
