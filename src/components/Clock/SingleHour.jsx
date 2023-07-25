import { Box } from '@mui/material'

function SingleHour({ disable, index, text }) {
  // const arr = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360]
  const active = true
  return (
    <Box
      height={'50%'}
      display={disable ? 'none' : 'block'}
      width={active ? '2px' : '1px'}
      // bgcolor={active ? 'primary.main' : 'text.disabled'}
      position={'absolute'}
      bottom={'50%'}
      left={'50%'}
      sx={
        disable
          ? {}
          : (theme) => ({
              transition: 'all .4s',
              rotate: `${index}deg`,
              transformOrigin: 'bottom',
              '&::before': {
                content: `'${text}'`,
                position: 'absolute',
                top: '-38px',
                left: '50%',
                translate: '-50%',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: `${
                  active
                    ? theme.palette.primary.main
                    : theme.palette.text.disabled
                } ${active ? '2px' : '1px'} solid`,
                color: active
                  ? theme.palette.text.primary
                  : theme.palette.text.disabled,
                p: '17px',
                borderRadius: '50%',
                width: '14px',
                height: '14px',
                fontSize: '10px',
              },
            })
      }
    />
  )
}

export default SingleHour
