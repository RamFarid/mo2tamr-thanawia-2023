import { Typography } from '@mui/material'

function HymnTitle({ name, no }) {
  return (
    <>
      <Typography variant='h6' component={'h3'}>
        {name}
      </Typography>
      <Typography variant='caption' component={'h4'}>
        {no}
      </Typography>
    </>
  )
}

export default HymnTitle
