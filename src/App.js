import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  colors,
  createTheme,
} from '@mui/material'
import React, { useMemo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './routes/HomeLayout'
import Home from './routes/Home'
import Score from './routes/Score'
import Day from './routes/Day'
import Motto from './routes/Motto'
import Login from './routes/Login'
import UserContextProvider from './Contexts/UserContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ScoreContextProvider from './Contexts/ScoreContext'
import { useTheme } from './Contexts/ThemeContext'
import Hymn from './routes/Hymn'
import QRCode from './routes/QRCode'
import ErrorBoundary from './components/ErrorBoundary'
import QRCodeContextProvider from './Contexts/QRCodeContext'

function App() {
  const [theme] = useTheme()
  const themeConstructor = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
          primary: colors['deepPurple'],
          firstSecondary: {
            light: '#E6E6FA',
            dark: '#bebdd7ba',
          },
          secondSecondary: {
            light: '#FFDAB9',
            dark: '#e6c49ebf',
          },
          thirdSecondary: {
            light: '#BEBAA7',
            dark: '#9c9885b0',
          },
        },
        typography: {
          fontFamily: "'Cairo', sans-serif",
        },
        components: {
          MuiSpeedDialAction: {
            styleOverrides: {
              staticTooltipLabel: {
                width: '120px',
                fontSize: '14px',
              },
            },
          },
        },
      }),
    [theme]
  )
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeConstructor}>
        <UserContextProvider>
          <ScoreContextProvider>
            <QRCodeContextProvider>
              <GlobalStyles
                styles={{
                  '*': {
                    padding: 0,
                    margin: 0,
                    boxSizing: 'border-box',
                    fontFamily: "'Cairo', sans-serif",
                  },
                  body: {
                    fontFamily: "'Cairo', sans-serif",
                  },
                  '.MuiFormHelperText-root': {
                    textAlign: 'right !important',
                  },
                }}
              />
              <CssBaseline />
              <Routes>
                <Route element={<HomeLayout />} path='/'>
                  <Route
                    element={
                      <ErrorBoundary>
                        <Home />
                      </ErrorBoundary>
                    }
                    index
                  />
                  <Route
                    element={
                      <ErrorBoundary>
                        <Score />
                      </ErrorBoundary>
                    }
                    path='/score'
                  />
                  <Route
                    element={
                      <ErrorBoundary>
                        <Motto />
                      </ErrorBoundary>
                    }
                    path='/motto'
                  />
                  <Route
                    element={
                      <ErrorBoundary>
                        <Day />
                      </ErrorBoundary>
                    }
                    path='/day/:day'
                  />
                  <Route
                    element={
                      <ErrorBoundary>
                        <Hymn />
                      </ErrorBoundary>
                    }
                    path='/hymn/:hymn'
                  />
                  <Route
                    element={
                      <ErrorBoundary>
                        <QRCode />
                      </ErrorBoundary>
                    }
                    path='/qrcode'
                  />
                </Route>
                <Route element={<Login />} path='/login' />
              </Routes>
              <ToastContainer
                position='top-center'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
              />
            </QRCodeContextProvider>
          </ScoreContextProvider>
        </UserContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
