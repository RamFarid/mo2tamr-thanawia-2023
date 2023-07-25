import { Box } from '@mui/material'
import HymnTitle from './HymnTitle'
import HymnList from './HymnList'

function AltftYellaMaonty() {
  return (
    <>
      <HymnTitle no={'المزمور السبعون'} name='اللهم التفت الي معونتي' />
      <HymnList>
        <Box component={'li'}>اللهم، إلى تنجيتي. يارب، إلى معونتي أسرع</Box>
        <Box component={'li'}>
          ليخز ويخجل طالبو نفسي. ليرتد إلى خلف ويخجل المشتهون لي شرا
        </Box>
        <Box component={'li'}>ليرجع من أجل خزيهم القائلون: هه هه</Box>
        <Box component={'li'}>
          وليبتهج ويفرح بك كل طالبيك، وليقل دائما محبو خلاصك: ليتعظم الرب
        </Box>
        <Box component={'li'}>
          أما أنا فمسكين وفقير. اللهم، أسرع إلي. معيني ومنقذي أنت. يارب، لا تبطؤ
        </Box>
      </HymnList>
    </>
  )
}

export default AltftYellaMaonty
