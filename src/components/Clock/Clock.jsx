import { Box, Typography } from '@mui/material'
import SingleHour from './SingleHour'
import { drawOccupiedAreas } from '../../lib/ClockLib'
import { useTime } from '../../Contexts/TimeContext'
import { useEffect, useRef } from 'react'
import SingleActivity from './SingleActivity'

function Clock({ activities, areas, hands, morining }) {
  const [{ dayStatus }] = useTime()
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 120
    console.log('hands: ', hands)
    console.log('areas: ', areas)
    drawOccupiedAreas(ctx, areas, centerX, centerY, radius, morining)
    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }, [activities, areas, hands, morining])
  return (
    <>
      <Typography
        variant='h6'
        align='center'
        color={
          (morining && dayStatus === 'AM') || (!morining && dayStatus === 'PM')
            ? 'primary'
            : 'text.disabled'
        }
        component={'h2'}
      >
        {morining ? 'صباحا' : 'مساءا'}
      </Typography>
      <Typography
        variant='subtitle2'
        align='center'
        color={
          (morining && dayStatus === 'AM') || (!morining && dayStatus === 'PM')
            ? ''
            : 'text.disabled'
        }
      >
        {morining ? 'نص اليوم الأول' : 'نص اليوم التاني'}
      </Typography>
      <Box
        position={'relative'}
        height={`240px`}
        width={`240px`}
        borderRadius={'50%'}
        marginX={'auto'}
        mt={9}
        mb={6.9}
      >
        <canvas width={'240'} ref={canvasRef} height={'240'} />
        <Box
          position='absolute'
          top='50%'
          left='50%'
          sx={{
            translate: '-50 -50%',
          }}
          bgcolor={'#fff'}
          width={'4px'}
          height={'4px'}
          zIndex={1}
          borderRadius={'50%'}
        />
        {activities?.map((act, i) => (
          <SingleActivity {...act} key={i + 1} />
        ))}
        {hands?.map((act, i) => {
          return <SingleHour morning {...act} key={i} />
        })}
      </Box>
    </>
  )
}

export default Clock
