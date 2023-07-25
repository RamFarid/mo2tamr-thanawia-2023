import {
  CircularProgress,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import TableHeader from '../TableHeader'
import SinglePerson from './SinglePerson'
import { useCallback, useState } from 'react'
import ControlPersonModal from './ControlPersonModal'
import { useScore } from '../../../Contexts/ScoreContext'
import CustomCell from '../../reusable/CustomGroupCell'
import { useUser } from '../../../Contexts/UserContext'

function PersonTable() {
  const { persons, isLoading, personError } = useScore()
  const [showEditModal, setShowEditModal] = useState(false)
  const [editContent, setEditContent] = useState({})
  const { isLoggedIn } = useUser()
  const editHandler = useCallback((person) => {
    setShowEditModal(true)
    setEditContent(person)
  }, [])
  const closeModalHandle = useCallback(() => {
    setShowEditModal(false)
    setEditContent({})
  }, [])
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            {personError?.length > 0 && (
              <TableRow>
                <TableCell align='center' sx={{ p: 2 }} colSpan={5}>
                  <Typography
                    component={'div'}
                    variant='caption'
                    color={'error'}
                  >
                    {personError}
                    <br />
                    لو المشكله فضلت معاك{' '}
                    <Link
                      underline='hover'
                      href='https://api.whatsapp.com/send?phone=201553706448&text=ما هتلاقيني جنبك ديما .. داخللي واتساب ليه؟\n'
                    >
                      تعالالي
                    </Link>
                    <br />
                    {`${
                      persons.length > 0
                        ? 'المجاميع اللي قدامك دي قديمه لحد ما المجامبع الحديثه اوصلها'
                        : ''
                    }`}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
            <TableHeader
              actionHandler={() => {
                setEditContent({})
                setShowEditModal(true)
              }}
              columns={5}
              actoionText={'ضيف مخدوم'}
              txt='اعـــــــرف تــرتـــيـــبـــك'
            />
            <TableRow>
              <TableCell align='right' sx={{ py: 1 }}>
                ت
              </TableCell>
              <TableCell align='right' sx={{ py: 1 }}>
                الأسم
              </TableCell>
              <TableCell align='right' sx={{ py: 1 }}>
                المرحله
              </TableCell>
              <TableCell align='right' sx={{ py: 1, bgcolor: 'action.hover' }}>
                النقط
              </TableCell>
              {isLoggedIn && <TableCell align='right' sx={{ py: 1 }} />}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <CustomCell align='center' sx={{ p: 2 }} colSpan={5}>
                  <Typography component={'div'} variant='h6' color={'error'}>
                    <CircularProgress />
                  </Typography>
                </CustomCell>
              </TableRow>
            ) : persons.length ? (
              persons.map((person, i) => (
                <SinglePerson
                  person={person}
                  key={person._id}
                  i={i + 1}
                  onEdit={editHandler}
                />
              ))
            ) : (
              <TableRow>
                <TableCell align='center' sx={{ p: 2 }} colSpan={5}>
                  <Typography component={'div'} variant='h6' color={'error'}>
                    مفيش مخدومين
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <ControlPersonModal
        open={showEditModal}
        onClose={closeModalHandle}
        person={editContent}
      />
    </>
  )
}

export default PersonTable
