import { TableCell, TableRow, styled } from '@mui/material'
import ActionsCell from '../ActionsCell'
import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { useScore } from '../../../Contexts/ScoreContext'
import { SERVER_URL, useUser } from '../../../Contexts/UserContext'
import SuperscriptIcon from '@mui/icons-material/Superscript'

function SinglePerson({ person, onEdit, i }) {
  const [isLoading, setIsLoading] = useState(false)
  const { online, isLoggedIn } = useUser()
  const { removePerson, updatePerson } = useScore()
  const deleteHandler = useCallback(async () => {
    if (!online) return toast('طب ما انت معكش نت')
    try {
      setIsLoading(true)
      const res = await fetch(`${SERVER_URL}/persons/${person._id}`, {
        method: 'DELETE',
        credentials: 'include',
      })
      const data = await res.json()
      if (data.success) {
        toast.success(data.message)
        removePerson(person)
        return
      }
      toast.error(data.message)
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }, [online, person, removePerson])

  const quickScoreUpHandler = useCallback(async () => {
    const res = await fetch(`${SERVER_URL}/qrcode?id=${person._id}`, {
      method: 'PUT',
      credentials: 'include',
    })
    const data = await res.json()
    if (data.success) {
      toast.success(`${person.name} زاد نقطتين`, {
        progress: 0,
        icon: <SuperscriptIcon color='success' />,
      })
      updatePerson(data.data)
    }
    console.log('Long Press')
  }, [person, updatePerson])

  // #E6E6FA
  // #FFDAB9
  // #BEBAA7
  return (
    <>
      <TableRow
        sx={(theme) => {
          return {
            bgcolor: isLoggedIn
              ? 'transparent'
              : person.grade === 1 && theme.palette.mode === 'light'
              ? '#E6E6FA'
              : person.grade === 1 && theme.palette.mode === 'dark'
              ? '#bebdd7ba'
              : person.grade === 2 && theme.palette.mode === 'light'
              ? '#FFDAB9'
              : person.grade === 2 && theme.palette.mode === 'dark'
              ? '#e6c49ebf'
              : person.grade === 3 && theme.palette.mode === 'dark'
              ? '#9c9885b0'
              : '#BEBAA7',
          }
        }}
      >
        <CustomCell align='right'>{i || '107'}</CustomCell>
        <CustomCell align='right'>{person.name}</CustomCell>
        <CustomCell align='right'>
          {person.grade === 1 ? 'اولى' : person.grade === 2 ? 'تانيه' : 'تالته'}
        </CustomCell>
        <CustomCell
          align='right'
          sx={{
            bgcolor: isLoggedIn ? 'action.hover' : 'transparent',
          }}
        >
          {person.points}
        </CustomCell>
        {isLoggedIn && (
          <ActionsCell
            onEdit={() => onEdit(person)}
            onDelete={deleteHandler}
            isLoading={isLoading}
            onHold={quickScoreUpHandler}
          />
        )}
      </TableRow>
    </>
  )
}

const CustomCell = styled(TableCell)({
  paddingBlock: '8px',
})

export default SinglePerson
