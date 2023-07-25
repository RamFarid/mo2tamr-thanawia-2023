import { Box } from '@mui/material'
import HymnTitle from './HymnTitle'
import HymnList from './HymnList'

function YastgibLkElrb() {
  return (
    <>
      <HymnTitle name='يستجيب لك الرب' no='المزمور العشرون' />
      <HymnList>
        <Box component={'li'}>
          ليستجب لك الرب في يوم الضيق. ليرفعك اسم إله يعقوب
        </Box>
        <Box component={'li'}>ليرسل لك عونا من قدسه، ومن صهيون ليعضدك</Box>
        <Box component={'li'}>ليذكر كل تقدماتك، ويستسمن محرقاتك. سلاه</Box>
        <Box component={'li'}>ليعطك حسب قلبك، ويتمم كل رأيك</Box>
        <Box component={'li'}>
          نترنم بخلاصك، وباسم إلهنا نرفع رايتنا. ليكمل الرب كل سؤلك
        </Box>
        <Box component={'li'}>
          الآن عرفت أن الرب مخلص مسيحه، يستجيبه من سماء قدسه، بجبروت خلاص يمينه
        </Box>
        <Box component={'li'}>
          هؤلاء بالمركبات وهؤلاء بالخيل، أما نحن فاسم الرب إلهنا نذكر
        </Box>
        <Box component={'li'}>هم جثوا وسقطوا، أما نحن فقمنا وانتصبنا</Box>
        <Box component={'li'}>يارب خلص ليستجب لنا الملك في يوم دعائنا</Box>
      </HymnList>
    </>
  )
}

export default YastgibLkElrb
