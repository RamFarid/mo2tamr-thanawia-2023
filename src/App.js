import {
  Button,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  GlobalStyles,
  ThemeProvider,
  Typography,
  colors,
  createTheme,
} from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { Route, Routes, useLocation } from 'react-router-dom'
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

const config = {
  onUpdate: () => {
    alert('في ابديت اقفل الابليكاشن و افتحه تاني عشان يتحدث')
  },
  onSuccess: () => {
    alert('تم الحفظ للتعامل بدون انترنت')
  },
}

function App() {
  const [securityAlert, setSecurityAlert] = useState(
    JSON.parse(localStorage.getItem('securityAlert')) == null
  )
  const [theme] = useTheme()
  const location = useLocation()
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

  useEffect(() => {
    const sa = JSON.parse(localStorage.getItem('securityAlert'))
    console.log(sa)
    if (sa === true) {
      serviceWorkerRegistration.register(config)
    }
  }, [])

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [location.pathname])

  return (
    <ThemeProvider theme={themeConstructor}>
      <UserContextProvider>
        <ScoreContextProvider>
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
          <Dialog
            open={securityAlert}
            onClose={() => {}}
            id='offlineCacheDialog'
            role='dialog'
            aria-labelledby='offlineCacheDialogTitle'
            aria-describedby='offlineCacheDialogDescription'
          >
            <DialogTitle id='offlineCacheDialogTitle'>
              التخزين المؤقت للمحتوى
            </DialogTitle>
            <DialogContent id='offlineCacheDialogDescription'>
              يرجى العلم بأنني سوف اقوم{' '}
              <Typography color='primary' fontWeight={700} component='b'>
                بتنزيل الموقع
              </Typography>{' '}
              علي جهازك لامكانية التعامل معه اثناء عدم الاتصال بالأنترنت و هذا
              أيضًا سوف يحسن تجربتك على المتصفح من سرعة و أداء افضل, سوف تحتوي
              البيانات الذي سيتم حفظها على بعض الصور و صفحات الموقع
            </DialogContent>
            <DialogActions>
              <Button
                color='error'
                onClick={() => {
                  setSecurityAlert(false)
                  localStorage.setItem('securityAlert', false)
                }}
              >
                لاحقًا
              </Button>
              <Button
                onClick={() => {
                  serviceWorkerRegistration.register(config)
                  localStorage.setItem('securityAlert', false)
                  setSecurityAlert(false)
                }}
              >
                أوافق
              </Button>
            </DialogActions>
          </Dialog>
        </ScoreContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  )
}

export default App
