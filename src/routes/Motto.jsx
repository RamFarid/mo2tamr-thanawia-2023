import { Box, Button, Stack, Typography } from '@mui/material'
import Paragraph from '../components/reusable/Paragraph'
import { useState } from 'react'
import AudioPlayer from '../components/Motto/AudioPlayer'

function Motto() {
  const [showMarrad, setShowMarrad] = useState(
    JSON.parse(localStorage.getItem('showMarrad')) || false
  )
  const toggleMarrad = () => {
    setShowMarrad(!showMarrad)
    localStorage.setItem('showMarrad', JSON.stringify(!showMarrad))
  }
  return (
    <Stack>
      <Typography mb={2} textAlign={'center'} variant='h3' component={'h2'}>
        الــشــعــــار
      </Typography>
      <AudioPlayer />
      {!showMarrad && <Marrad />}
      <Button
        onClick={toggleMarrad}
        sx={{
          my: 1,
          position: 'sticky',
          top: `6px`,
          bgcolor: 'background.default',
        }}
        variant='outlined'
      >
        {showMarrad ? 'اخفاء المرد بعد كل فقرة' : 'اظهار المرد بعد كل فقرة'}
      </Button>
      <Stack component={'ul'} px={2.5} gap={4}>
        <CustomListItem
          showMarrad={showMarrad}
          txt='عشيه و باكر بخور بينهم نص الليل و نصوم نلبس لبس الخدمه و نبدأ الاجبيه حسب
      اليوم'
        />
        <CustomListItem
          txt='و بصوت واحد كله محبه، للإيمان بنصلي قانون بعده الحمل راح يتقدم و نصلي كيرياليسون'
          showMarrad={showMarrad}
        />
        <CustomListItem
          txt='بولس نقرا و كاثوليكون ابركسيس و بخور مرفوع سيره جوا السينكسار مزمور و انجيل و شموع'
          showMarrad={showMarrad}
        />
        <CustomListItem
          txt='صلح نصلي يلا نقبل و نشيل الابروسفارين سر حلول روحك القدوس .. اسجدوا بخشوع راكعين'
          showMarrad={showMarrad}
        />
        <CustomListItem
          txt='الاواشي وراها المجمع سيرة تعلمنا الايمان قسمة نصلي و اعترافنا جسده حقيقي و دمه كمان'
          showMarrad={showMarrad}
        />
      </Stack>
    </Stack>
  )
}

const CustomListItem = ({ txt, showMarrad }) => (
  <Box
    component={'li'}
    sx={{
      '&::marker': { content: "'\u{1F49C}'" },
      paddingInlineStart: 1.3,
    }}
  >
    <Typography maxWidth={'calc(370px - 20px)'}>{txt}</Typography>
    {showMarrad && <Marrad />}
  </Box>
)

const Marrad = () => (
  <Paragraph component={'p'} fontWeight={700} variant='h6'>
    <Typography fontWeight={'inherit'} component={'span'}>
      المرد:
    </Typography>
    <Typography fontWeight={'inherit'} component={'span'} color={'primary'}>
      {' '}
      قداس كنيستنا القبطيه رحله للسما ويا يسوع أنا انافورا و ليتروجيه نقضي الوقت
      فرح و خشوع
    </Typography>
  </Paragraph>
)

export default Motto
