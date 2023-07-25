import { Link, useParams } from 'react-router-dom'
import Clock from '../components/Clock/Clock'
import { thursdayClock, fridayClock, saturdayClock } from '../data/clock'
import { Box, Button, Stack, Typography } from '@mui/material'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
function Day() {
  const { day } = useParams()
  const { nightActs, dayActs, nigthHands, dayHands, dayAreas, nightAreas } =
    day === 'الخميس'
      ? thursdayClock
      : day === 'الجمعه'
      ? fridayClock
      : day === 'السبت'
      ? saturdayClock
      : thursdayClock

  return (
    <Box mb={5}>
      <Stack
        mb={2}
        direction='row'
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Button
          startIcon={<ArrowForwardIosRoundedIcon fontSize='large' />}
          component={Link}
          disabled={day === 'الخميس'}
          to={
            day === 'الخميس'
              ? ''
              : day === 'الجمعه'
              ? '/day/الخميس'
              : day === 'السبت'
              ? '/day/الجمعه'
              : '/day/الخميس'
          }
          sx={{
            gap: '5px',
            flex: 1,
          }}
        >
          <Typography noWrap fontSize='12px'>
            {day === 'الخميس'
              ? 'الأول'
              : day === 'الجمعه'
              ? 'الخميس'
              : day === 'السبت'
              ? 'الجمعه'
              : null}
          </Typography>
        </Button>

        <Button
          endIcon={<ArrowBackIosRoundedIcon fontSize='large' />}
          disabled={day === 'السبت'}
          sx={{
            gap: '5px',
            flex: 1,
          }}
          to={
            day === 'السبت'
              ? ''
              : day === 'الجمعه'
              ? '/day/السبت'
              : day === 'الخميس'
              ? '/day/الجمعه'
              : '/day/الخميس'
          }
          component={Link}
        >
          <Typography fontSize='12px' noWrap>
            {day === 'السبت'
              ? 'الأخير'
              : day === 'الجمعه'
              ? 'السبت'
              : day === 'الخميس'
              ? 'الجمعه'
              : null}
          </Typography>
        </Button>
      </Stack>
      <Typography align='center' mb={2} component={'h2'} variant='h3'>
        {day}
      </Typography>
      <Clock morining hands={dayHands} areas={dayAreas} activities={dayActs} />
      <Clock activities={nightActs} areas={nightAreas} hands={nigthHands} />
    </Box>
  )
}

export default Day
