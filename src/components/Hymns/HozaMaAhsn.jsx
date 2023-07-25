import { Box } from '@mui/material'
import HymnList from './HymnList'
import HymnTitle from './HymnTitle'

function HozaMaAhsn() {
  return (
    <>
      <HymnTitle name='هوذا ما احسن' no='مزمور ميه اتنين و تلاتين' />
      <HymnList>
        <Box component='li'>هوذا ما أحسن وما أحلي أن يسكن الاخوة معا.</Box>
        <Box component='li'>كالطيب الكائن على الرأس الذي ينزل على اللحية،</Box>
        <Box component='li'>لحية هارون النازلة على جيب قميصه.</Box>
        <Box component='li'>ومثل ندى حرمون المنحدر على جبل صهيون.</Box>
        <Box component='li'>
          لأن هناك أمر الرب بالبركة والحياة إلى الأبد. هلليلويا.
        </Box>
      </HymnList>
    </>
  )
}

export default HozaMaAhsn
