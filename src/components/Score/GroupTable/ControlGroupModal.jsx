import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useScore } from '../../../Contexts/ScoreContext'
import { SERVER_URL, useUser } from '../../../Contexts/UserContext'

function ControlGroupModal({ group, open, onClose }) {
  const { addNewGroup, updateGroup } = useScore()
  const { online } = useUser()
  const [name, setName] = useState('')
  const [points, setPoints] = useState('')
  const [errors, setErrors] = useState({ name: '', points: '' })
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (Object.keys(group).length) {
      setName(group.name)
      setPoints(group.points)
    }
  }, [group])

  const handleGroupMadal = async () => {
    if (!online) return toast('طب ما انت معكش نت')
    const upoints = Number(points)
    const uname = name.trim()
    if (!upoints && upoints !== 0) {
      setErrors((pre) => ({ ...pre, points: 'دخل الرقم' }))
      return
    }
    try {
      setIsLoading(true)
      if (Object.keys(group).length === 0) {
        const response = await fetch(`${SERVER_URL}/groups/new`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: uname,
            points: upoints === '' ? 0 : upoints,
          }),
          credentials: 'include',
        })
        const data = await response.json()
        if (data.success) {
          toast.success(data.message)
          addNewGroup(data.data)
          return
        }
        toast.error(data.message)
        return
      }
      const response = await fetch(`${SERVER_URL}/groups/${group._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: uname,
          points: points === '' ? 0 : points,
        }),
        credentials: 'include',
      })
      const data = await response.json()
      if (data.success) {
        toast.success(data.message)
        updateGroup(data.data)
        console.log(data.data)
        return
      }
      toast.error(data.message)
      console.log('Edit Group')
      return
    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsLoading(false)
      closeHandler()
    }
  }

  const closeHandler = () => {
    setName('')
    setPoints('')
    onClose()
  }

  return (
    <Dialog open={open} onClose={closeHandler}>
      <DialogTitle>
        {Object.keys(group).length > 0 ? 'تعديل مجموعة ' : 'اضافة مجموعه جديده'}
        <Typography
          color={'primary'}
          component={'span'}
          fontSize={'inherit'}
          fontWeight={'inherit'}
        >
          {group.name}
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ overflow: 'hidden' }}>
        <TextField
          value={name}
          margin='dense'
          size='small'
          fullWidth
          sx={{ marginInlineEnd: 1.5 }}
          label='أسم المجموعه'
          type='text'
          required
          error={Boolean(errors.name.length)}
          helperText={Boolean(errors.name.length) ? errors.name : ''}
          onChange={(e) => {
            setErrors((pre) => ({ ...pre, name: '' }))
            const value = e.target.value
            if (value.trim().length > 20) {
              setErrors((pre) => ({ ...pre, name: 'الاسم طويل كده' }))
              setName(value)
            }
            setName(value)
          }}
        />
        <TextField
          value={points}
          margin='dense'
          size='small'
          fullWidth
          type='number'
          label='النقط'
          error={Boolean(errors.points.length)}
          helperText={Boolean(errors.points.length) ? errors.points : ''}
          onChange={(e) => {
            setErrors((pre) => ({ ...pre, points: '' }))
            const value = e.target.value.trim()
            if (value < 0) {
              setErrors((pre) => ({ ...pre, points: 'سالب ازاي يعني؟' }))
              setPoints(value)
            }
            setPoints(value)
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeHandler} color='error'>
          اغلاق
        </Button>
        <Button
          onClick={handleGroupMadal}
          disabled={
            isLoading ||
            Boolean(errors.name.length) ||
            Boolean(errors.points.length) ||
            !name.trim().length ||
            !points.length ||
            (name.trim() === group.name &&
              Number(points) === Number(group.points))
          }
        >
          {isLoading ? 'بيحمل' : 'حفظ'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ControlGroupModal
