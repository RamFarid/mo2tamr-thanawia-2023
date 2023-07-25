import { Box, Typography } from '@mui/material'
import HymnTitle from './HymnTitle'
import HymnList from './HymnList'

function ElikrfatAini() {
  return (
    <>
      <HymnTitle name='إليك رفعت عيني' no='مزمور ميه اتنين و عشرين' />
      <HymnList>
        <Box component={'li'}>إليك رفعت عينيّ يا ساكن السماء</Box>
        <Box component={'li'}>فها هما مثل عيون العبيد إلى أيدي مواليهم</Box>
        <Box component={'li'}>ومثل عيني الأمة إلى يدي سيدتها</Box>
        <Box component={'li'}>كذلك أعيننا نحو الرب إلهنا حتى يتراءف علينا</Box>
        <Box component={'li'}>
          ارحمنا يا رب ارحمنا، فإننا كثيرا ما امتلأنا هوانا
        </Box>
        <Box component={'li'}>وكثيرا ما امتلأت نفوسنا</Box>
        <Box component={'li'}>
          العار اردده على المخصبين والهوان على المتعظمين
        </Box>
        <Typography variant='caption'>💜 هلليلويا 💜</Typography>
      </HymnList>
    </>
  )
}

export default ElikrfatAini
