import { Stack } from '@mui/material'

function HymnList({ children }) {
  return (
    <Stack gap={2} component={'ol'} px={2} mt={2}>
      {children}
    </Stack>
  )
}

export default HymnList
