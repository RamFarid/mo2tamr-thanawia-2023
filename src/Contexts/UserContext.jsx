import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, CircularProgress, Modal, Stack } from '@mui/material'
import { toast } from 'react-toastify'

export const SERVER_URL =
  process.env.NODE_ENV === 'development'
    ? `https://mo2tamr-thanawia-server-2023.vercel.app`
    : `http://localhost:5000`

const UserContext = createContext()
export function useUser() {
  return useContext(UserContext)
}

function UserContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [online, setOnline] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch(`${SERVER_URL}/auth/check`, {
          credentials: 'include',
        })
        const data = await response.json()
        if (data.success) {
          setIsLoggedIn(true)
          return
        }
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [online])
  useEffect(() => {
    if (!navigator.onLine) {
      setOnline(false)
    }
    const onlineHandler = () => {
      setOnline(true)
    }
    const offLineHandler = () => {
      setOnline(false)
    }
    // If user being offline
    window.addEventListener('offline', offLineHandler)
    // If user back online after offline
    window.addEventListener('online', onlineHandler)
    return () => {
      window.addEventListener('offline', offLineHandler)
      window.addEventListener('online', onlineHandler)
    }
  }, [])

  async function logOut() {
    try {
      const res = await fetch(`${SERVER_URL}/auth/logout`, {
        credentials: 'include',
      })
      const data = await res.json()
      if (data.success) {
        setIsLoggedIn(false)
        return
      }
      toast.error(data.message, { progress: 0 })
    } catch (error) {
      toast.error('أسف في حاحه حصلت: ' + error.message)
    }
  }

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, online, logOut }}>
      {isLoading ? (
        <Modal
          open={true}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none !important',
            outline: 'none !important',
          }}
        >
          <Stack
            border={'none'}
            sx={{ outline: 'none' }}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box
              maxWidth={'400px'}
              component={'img'}
              sx={{
                animation: 'infinite fade 1s',
                '@keyframes fade': {
                  from: {
                    opacity: 0,
                  },
                  to: {
                    opacity: 1,
                  },
                },
              }}
              src='/android-chrome-512x512.png'
            />
            <CircularProgress />
          </Stack>
        </Modal>
      ) : (
        children
      )}
    </UserContext.Provider>
  )
}

export default UserContextProvider

UserContextProvider.propTypes = {
  children: PropTypes.any,
}
