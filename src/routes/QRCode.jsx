import CloseIcon from '@mui/icons-material/Close'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { SERVER_URL } from '../Contexts/UserContext'
import { useEffect } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
import { useNavigate } from 'react-router-dom'
import { useQRCode } from '../Contexts/QRCodeContext'

function QRCode() {
  const navigate = useNavigate()
  const [id, setId] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [statusCode, setStatusCode] = useState(0)
  const [message, setMessage] = useState('')
  const scannerRef = useQRCode(null)
  const retryAgain = () => {
    setId('')
    setIsLoading(true)
    setMessage('')
    setStatusCode(0)
    setError(false)
    if (scannerRef.current.getState() === 3) scannerRef.current.resume()
  }
  const scoreUp = async (decodedId) => {
    if (!decodedId) {
      setIsLoading(false)
      setError(true)
      setMessage('فين الID؟')
      return
    }
    try {
      const res = await fetch(`${SERVER_URL}/qrcode?id=${decodedId}`, {
        method: 'PUT',
        credentials: 'include',
      })
      const data = await res.json()
      setStatusCode(res.status)
      if (data.success) {
        setMessage(
          `<b>${data.data.name} </b>زاد نقطتين و وصل لـ<span style="color: green;font-weight: 900;">${data.data.points}</span> نقطه`
        )
      }
      if (!data.success) {
        setError(true)
        setMessage(data.message)
      }
    } catch (error) {
      setError(true)
      setMessage(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!id && !scannerRef.current) {
      scannerRef.current = new Html5QrcodeScanner(
        'reader',
        {
          fps: 60,
          qrbox: { width: 250, height: 250 },
        },
        /* verbose= */ false
      )
      scannerRef.current.render(onScanSuccess, onScanFailure)
      async function onScanSuccess(decodedText, decodedResult) {
        // handle the scanned code as you like, for example:
        setId(decodedText)
        scoreUp(decodedText)
        if (scannerRef.current.getState() === 2) scannerRef.current.pause(true)
      }
      function onScanFailure(error) {
        // handle scan failure, usually better to ignore and keep scanning.
        // for example:
      }
    }
    return () => {
      if (!id && !scannerRef.current) {
        scannerRef.current.clear()
      }
    }
  }, [id, scannerRef])

  return (
    <>
      <div
        id='reader'
        style={{
          display: id.length ? 'none' : 'block',
        }}
      />
      {id.length ? (
        <Paper
          sx={{
            height: 'calc(90vh - 77px)',
            overflow: 'hidden',
          }}
        >
          <Box
            width={'100%'}
            height={'50%'}
            bgcolor={isLoading ? '#fff' : error ? 'error.main' : 'success.main'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            {isLoading ? (
              <CircularProgress />
            ) : error ? (
              <CloseIcon sx={{ fontSize: '73px', color: '#fff' }} />
            ) : (
              <CheckCircleOutlineIcon
                sx={{ fontSize: '73px', color: '#fff' }}
              />
            )}
          </Box>
          <Stack
            justifyContent={'center'}
            alignItems={'center'}
            width={'100%'}
            height={'50%'}
            gap={1.2}
          >
            <Typography
              align='center'
              variant='h4'
              fontWeight={700}
              component={'h2'}
              color={
                isLoading
                  ? 'text.primary'
                  : error
                  ? 'error.mian'
                  : 'success.main'
              }
            >
              {isLoading ? 'ويت..' : error ? 'مشكلة' : 'حصل'}
            </Typography>
            <Typography
              align='center'
              maxWidth={'200px'}
              dangerouslySetInnerHTML={{ __html: message }}
            />
            <ButtonGroup size='small' orientation='vertical' sx={{ gap: 2 }}>
              <Button
                onClick={() => {
                  if (statusCode === 401) {
                    navigate('/score')
                  } else if (error) {
                    retryAgain()
                  } else {
                    navigate('/score')
                  }
                }}
                to={
                  statusCode === 401
                    ? '/score'
                    : error
                    ? 'حاول تاني؟'
                    : 'تروح للسكور؟'
                }
                mx='auto'
                variant='contained'
                sx={{ borderRadius: '100px' }}
              >
                {isLoading ? (
                  <CircularProgress sx={{ color: '#fff' }} />
                ) : statusCode === 401 ? (
                  'شوف اسكورك'
                ) : error ? (
                  'حاول تاني؟'
                ) : (
                  'تروح للسكور؟'
                )}
              </Button>
              <Button variant='text' onClick={retryAgain}>
                اسكان تاني؟
              </Button>
            </ButtonGroup>
          </Stack>
        </Paper>
      ) : null}
    </>
  )
}

export default QRCode
