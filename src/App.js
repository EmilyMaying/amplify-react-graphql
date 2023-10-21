import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import Routes from './routes'

import { theme } from './util/theme'
import './index.css'

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
  )
}

export default App