import CloseIcon from '@mui/icons-material/Close'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ErrorIcon from '@mui/icons-material/Error'
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { SERVER_URL } from '../Contexts/UserContext'

function QRCode() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [warn, setWarn] = useState(false)
  const [statusCode, setStatusCode] = useState(0)
  const [message, setMessage] = useState('')
  useEffect(() => {
    ;(async () => {
      const time = searchParams.get('t')
      const id = searchParams.get('id')
      if (!time) {
        navigate(`/qrcode?${searchParams.toString()}&t=${Date.now()}`, {
          replace: true,
        })
        if (!id) {
          setIsLoading(false)
          setError(true)
          setMessage('فين الID؟')
          return
        }
        try {
          const res = await fetch(`${SERVER_URL}/qrcode?id=${id}`, {
            method: 'PUT',
            credentials: 'include',
          })
          const data = await res.json()
          if (data.success) {
            setMessage(
              `<b>${data.data.name} </b>زاد 5 نقط و وصل لـ<span style="color: green;font-weight: 900;">${data.data.points}</span> نقطه`
            )
          }
          if (!data.success) {
            setError(true)
            if (res.status === 401) {
              setMessage(
                data.message +
                  ' ياه عليك لما تشغل دماغك <b>أنت فاكرني مغفل؟</b>'
              )
            } else {
              setMessage(data.message)
            }
          }

          setStatusCode(res.status)
        } catch (error) {
          setError(true)
          setMessage(error.message)
        } finally {
          setIsLoading(false)
        }
        return
      }
      if (Date.now() - time >= 3000) {
        setIsLoading(false)
        setWarn(true)
        setMessage('استخدمتو ده قبل كده .. سكان الQR code لو عاوز نزود تاني')
      }
    })()
  }, [navigate, searchParams])

  return (
    <Paper
      sx={{
        height: 'calc(90vh - 77px)',
        overflow: 'hidden',
      }}
    >
      <Box
        width={'100%'}
        height={'50%'}
        bgcolor={
          isLoading
            ? '#fff'
            : warn
            ? 'warning.main'
            : error
            ? 'error.main'
            : 'success.main'
        }
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {isLoading ? (
          <CircularProgress />
        ) : warn ? (
          <ErrorIcon sx={{ fontSize: '73px', color: '#fff' }} />
        ) : error ? (
          <CloseIcon sx={{ fontSize: '73px', color: '#fff' }} />
        ) : (
          <CheckCircleOutlineIcon sx={{ fontSize: '73px', color: '#fff' }} />
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
              : warn
              ? 'warning.main'
              : error
              ? 'error.mian'
              : 'success.main'
          }
        >
          {isLoading ? 'ويت..' : warn ? 'مستخدم' : error ? 'مشكلة' : 'حصل'}
        </Typography>
        <Typography
          align='center'
          maxWidth={'200px'}
          dangerouslySetInnerHTML={{ __html: message }}
        />
        <Button
          component={Link}
          to='/score'
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
      </Stack>
    </Paper>
  )
}

export default QRCode
