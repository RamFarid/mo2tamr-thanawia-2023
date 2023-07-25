import { TableRow } from '@mui/material'
import ActionsCell from '../ActionsCell'
import CustomCell from '../../reusable/CustomGroupCell'
import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { useScore } from '../../../Contexts/ScoreContext'
import { SERVER_URL, useUser } from '../../../Contexts/UserContext'

function SingleGroup({ group, i, onEdit }) {
  const [isLoading, setIsLoading] = useState(false)
  const { online, isLoggedIn } = useUser()
  const { removeGroup } = useScore()
  const deleteHandler = useCallback(async () => {
    if (!online) return toast('طب ما انت معكش نت')
    try {
      setIsLoading(true)
      const res = await fetch(`${SERVER_URL}/groups/${group._id}`, {
        method: 'DELETE',
        credentials: 'include',
      })
      const data = await res.json()
      if (data.message) {
        toast.success(data.message)
        removeGroup(group)
        return
      }
      toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [group, online, removeGroup])
  return (
    <TableRow
      sx={{
        bgcolor: i % 2 ? 'action.hover' : 'background.default',
      }}
    >
      <CustomCell>{i}</CustomCell>
      <CustomCell align='right'>{group.name}</CustomCell>
      <CustomCell align='right'>{group.points}</CustomCell>
      {isLoggedIn && (
        <ActionsCell
          onEdit={() => onEdit(group)}
          onDelete={deleteHandler}
          isLoading={isLoading}
        />
      )}
    </TableRow>
  )
}

export default SingleGroup
