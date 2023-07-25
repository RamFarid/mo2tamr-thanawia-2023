import { Box, Typography } from '@mui/material'

function SingleActivity({ text, index }) {
  const active = true
  return (
    <Box
      height={'29%'}
      display={'block'}
      position={'absolute'}
      bottom={'50%'}
      left='50%'
      fontSize={'12px'}
      sx={{
        transition: 'all .4s',
        rotate: `${index}deg`,
        transformOrigin: 'bottom',
        textAlign: 'center',
      }}
    >
      <Typography
        sx={(theme) => ({
          fontSize: '12px',
          position: 'absolute',
          top: '-50px',
          left: '50%',
          translate: '-50%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 1,
          // scale: '2 1',
          color: active ? theme.palette.background.default : 'text.disabled',
          textShadow: active
            ? `0 0 1px #000, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}, 0 0 1px ${theme.palette.primary.main}`
            : theme.palette.text.primary,
        })}
        component={'span'}
      >
        {text}
      </Typography>
    </Box>
  )
}

export default SingleActivity
