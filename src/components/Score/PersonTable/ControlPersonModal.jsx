import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useScore } from '../../../Contexts/ScoreContext'
import { SERVER_URL, useUser } from '../../../Contexts/UserContext'
import generateQRImg from '../../../utils/generateQRImg'

function ControlPersonModal({ person, open, onClose }) {
  const { addNewPerson, updatePerson } = useScore()
  const { online } = useUser()
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [points, setPoints] = useState('')
  const [grade, setGrade] = useState('')
  const [errors, setErrors] = useState({
    name: '',
    points: '',
    grade: '',
  })
  const [remoteUserName, setRemoteUserName] = useState('')
  const [qrCode, setQrCode] = useState('')

  useEffect(() => {
    if (Object.keys(person).length) {
      setName(person.name)
      setGrade(person.grade)
      setPoints(person.points)
    }
  }, [person])

  const handlePersonSave = async () => {
    if (!online) return toast('طب ما انت معكش نت')
    const upoints = Number(points)
    const uname = name.trim()
    if (!upoints && upoints !== 0) {
      setErrors((pre) => ({ ...pre, points: 'دخل الرقم' }))
      return
    }
    try {
      setIsLoading(true)
      if (Object.keys(person).length === 0) {
        const personData = {
          name: uname,
          points: upoints === '' ? 0 : upoints,
          grade,
        }
        const response = await fetch(`${SERVER_URL}/persons/new`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(personData),
          credentials: 'include',
        })
        const data = await response.json()
        if (data.success) {
          toast.success(data.message)
          addNewPerson(data.data)
          const link = await generateQRImg(data.data._id)
          console.log(link)
          setRemoteUserName(data.data.name)
          setQrCode(link)
          return
        }
        toast.error(data.message)
        return
      }
      const response = await fetch(`${SERVER_URL}/persons/${person._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: uname,
          points: upoints === '' ? 0 : upoints,
          grade,
        }),
        credentials: 'include',
      })
      const data = await response.json()
      if (data.success) {
        toast.success(data.message)
        console.log(data.data)
        updatePerson(data.data)
        closeHandler()
        return
      }
      toast.error(data.message)
      return
    } catch (error) {
      toast.error(error.message)
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const closeHandler = () => {
    setGrade('')
    setName('')
    setPoints('')
    setQrCode('')
    onClose()
  }

  return (
    <Dialog open={open} onClose={closeHandler}>
      <DialogTitle>
        {qrCode.length > 0
          ? `الQR code بتاع ${remoteUserName}`
          : Object.keys(person).length > 0
          ? 'تعديل بيانات '
          : 'اضافة مخدوم'}
        <Typography
          color={'primary'}
          component={'span'}
          fontSize={'inherit'}
          fontWeight={'inherit'}
        >
          {person.name || ''}
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ overflow: 'hidden', display: 'flex' }}>
        <Stack
          overflow={'hidden'}
          sx={{
            transition: 'all .6s',
            flexBasis: qrCode.length > 0 ? '100%' : '0',
          }}
        >
          <Box
            component={'img'}
            src={qrCode}
            alt='Photo of user'
            maxWidth={'300px'}
            maxHeight={'300px'}
            overflow={'hidden'}
            mx={'auto'}
          />
        </Stack>
        <Stack
          overflow='hidden'
          sx={{
            transition: 'all .6s',
            flexBasis: qrCode.length > 0 ? '0' : '100%',
          }}
        >
          <TextField
            value={name}
            margin='dense'
            size='small'
            fullWidth
            sx={{ marginInlineEnd: 1.5 }}
            error={Boolean(errors.name.length)}
            helperText={Boolean(errors.name.length) ? errors.name : ''}
            onChange={(e) => {
              setErrors((pre) => ({ ...pre, name: '' }))
              const { value } = e.target
              if (value.trim().length > 20) {
                setErrors((pre) => ({ ...pre, name: 'الاسم طويل كده' }))
                setName(value)
              }
              setName(value)
            }}
            label='الأسم'
            type='text'
          />
          <TextField
            value={points}
            margin='dense'
            sx={{ my: 2 }}
            size='small'
            fullWidth
            type='number'
            error={Boolean(errors.points.length)}
            helperText={Boolean(errors.points.length) ? errors.points : ''}
            onChange={(e) => {
              setErrors((pre) => ({ ...pre, points: '' }))
              const { value } = e.target
              if (value < 0) {
                setErrors((pre) => ({ ...pre, points: 'سالب ازاي يعني؟' }))
                setPoints(e.target.value)
              }
              setPoints(e.target.value)
            }}
            label='النقط'
          />
          <FormControl fullWidth>
            <InputLabel id='grade-menu-label'>المرحله</InputLabel>
            <Select
              margin='dense'
              size='small'
              labelId='grade-menu-label'
              id='grade-menu'
              value={grade}
              label='المرحله'
              onChange={(e) => setGrade(e.target.value)}
            >
              <MenuItem value={1}>اولى</MenuItem>
              <MenuItem value={2}>تانيه</MenuItem>
              <MenuItem value={3}>تالته</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </DialogContent>
      {!qrCode && (
        <DialogActions>
          <Button onClick={closeHandler} color='error'>
            اغلاق
          </Button>
          <Button
            onClick={handlePersonSave}
            disabled={
              isLoading ||
              Boolean(errors.name.length) ||
              Boolean(errors.points.length) ||
              Boolean(errors.grade.length) ||
              !name.trim() ||
              !points ||
              !grade ||
              (name.trim() === person.name &&
                Number(points) === Number(person.points) &&
                Number(grade) === Number(person.grade))
            }
          >
            {isLoading ? 'بحمل..' : 'حفظ'}
          </Button>
        </DialogActions>
      )}
    </Dialog>
  )
}

export default ControlPersonModal
