import { Box } from '@mui/material'
import HymnTitle from './HymnTitle'
import HymnList from './HymnList'

function TobaLLragol() {
  return (
    <>
      <HymnTitle name={'طوبى للرجل'} no='المزمور الأول' />
      <HymnList>
        <Box component={'li'}>
          طوبى للرجل الذي لم يسلك في مشورة الأشرار، وفي طريق الخطاة لم يقف، وفي
          مجلس المستهزئين لم يجلس
        </Box>
        <Box component={'li'}>
          لكن في ناموس الرب مسرته، وفي ناموسه يلهج نهارا وليلا
        </Box>
        <Box component={'li'}>
          فيكون كشجرة مغروسة عند مجاري المياه، التي تعطي ثمرها في أوانه، وورقها
          لا يذبل. وكل ما يصنعه ينجح
        </Box>
        <Box component={'li'}>
          ليس كذلك الأشرار، لكنهم كالعصافة التي تذريها الريح
        </Box>
        <Box component={'li'}>
          لذلك لا تقوم الأشرار في الدين، ولا الخطاة في جماعة الأبرار
        </Box>
        <Box component={'li'}>
          لأن الرب يعلم طريق الأبرار، أما طريق الأشرار فتهلك
        </Box>
      </HymnList>
    </>
  )
}

export default TobaLLragol
