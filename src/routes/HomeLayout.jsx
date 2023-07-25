import { Container } from '@mui/material'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import TimeContextProvider from '../Contexts/TimeContext'
import SpeedDial from '../components/SpeedDial/SpeedDial'

function HomeLayout() {
  return (
    <>
      <Header />
      <Container component={'main'} maxWidth='xs' sx={{ my: 2 }}>
        <TimeContextProvider>
          <Outlet />
        </TimeContextProvider>
      </Container>
      <SpeedDial />
    </>
  )
}

export default HomeLayout
