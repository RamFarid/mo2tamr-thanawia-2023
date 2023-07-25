import Stack from '@mui/material/Stack'
import AppReason from '../components/Home/AppReason'
import AppUsage from '../components/Home/AppUsage'
import AppContents from '../components/Home/AppContents'
import { Divider } from '@mui/material'
import AppNotes from '../components/Home/AppNotes'
import AppInstallInstructions from '../components/Home/AppInstallInstructions'

function Home() {
  return (
    <Stack gap={3}>
      <AppReason />
      <Divider />
      <AppContents />
      <Divider />
      <AppUsage />
      <Divider />
      <AppInstallInstructions />
      <Divider />
      <AppNotes />
    </Stack>
  )
}

export default Home
