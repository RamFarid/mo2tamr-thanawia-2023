import CloseIcon from '@mui/icons-material/Close'
import SportsScoreIcon from '@mui/icons-material/SportsScore'
import HomeSharpIcon from '@mui/icons-material/HomeSharp'
import EventNoteIcon from '@mui/icons-material/EventNote'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import AccessAlarm from '@mui/icons-material/AccessAlarm'
import {
  Box,
  ButtonGroup,
  IconButton,
  ListItemIcon,
  ListItemText,
  Drawer as MUIDrawer,
  Stack,
  Typography,
  Link as MUILink,
  styled,
  Divider,
  Switch,
  FormControlLabel,
  Button,
  MenuItem as MuiMenuItem,
} from '@mui/material'
import { useCallback, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material'
import { useTheme } from '../../Contexts/ThemeContext'
import { useUser } from '../../Contexts/UserContext'
import secondsComing from '../../assets/second-coming.png'
import MenuTitle from './MenuTitle'
import MenuAccordionDetails from './MenuAccordionDetails'
import MenuItem from './MenuItem'
import MenuAccorion from './MenuAccorion'
import hymns from '../../data/hymns'

function Drawer({ isDrawer, closeDrawer }) {
  const [isMenu, setIsMenu] = useState(null)
  const { isLoggedIn, logOut } = useUser()
  const [theme, toggleTheme] = useTheme()

  const closeIsMenu = useCallback(() => {
    setIsMenu(null)
    closeDrawer()
  }, [closeDrawer])

  return (
    <MUIDrawer
      PaperProps={{
        sx: {
          backgroundImage: `url("${secondsComing}")`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '70%',
          maxWidth: '340px',
        },
      }}
      anchor='left'
      open={isDrawer}
      onClose={closeDrawer}
    >
      <Box
        bgcolor={(theme) =>
          theme.palette.mode === 'dark' ? '#000000a1' : '#0000002e'
        }
        display={'flex'}
        flexDirection={'column'}
        sx={{
          '& *': {
            color: '#fff',
          },
        }}
        height={'100%'}
      >
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          mb={3}
          alignItems={'center'}
          boxShadow={4}
          px={2}
          py={1}
        >
          <Typography variant='h5'>تحب تشوف ايه؟</Typography>
          <IconButton onClick={closeDrawer}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Box
          py={1}
          pr={2}
          component={'ul'}
          sx={{
            overflowX: 'hidden',
            overflowY: 'scroll',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <MenuLink
            component={NavLink}
            to='/'
            onClick={closeDrawer}
            sx={{ my: 1 }}
          >
            <ListItemIcon>
              <HomeSharpIcon />
            </ListItemIcon>
            <ListItemText>الصفحة الرئيسية</ListItemText>
          </MenuLink>
          <MenuLink component={NavLink} to='/motto' onClick={closeDrawer}>
            <ListItemIcon>
              <EventNoteIcon />
            </ListItemIcon>
            <ListItemText>شعار المؤتمر</ListItemText>
          </MenuLink>
          <MenuAccorion isOpen={isMenu === 0} i={0} setIsOpen={setIsMenu}>
            <MenuTitle txt='النظام' icon={<AccessAlarm />} />
            <MenuAccordionDetails>
              <MenuItem
                txt='الخميس'
                link={'/day/الخميس'}
                onClick={closeIsMenu}
              />
              <MenuItem txt='الجمعه' link='/day/الجمعه' onClick={closeIsMenu} />
              <MenuItem txt='السبت' link='/day/السبت' onClick={closeIsMenu} />
            </MenuAccordionDetails>
          </MenuAccorion>
          <MenuAccorion isOpen={isMenu === 1} i={1} setIsOpen={setIsMenu}>
            <MenuTitle txt='محفوظات و ترانيم' icon={<LibraryMusicIcon />} />
            <MenuAccordionDetails>
              <MuiMenuItem disabled>محفوظات</MuiMenuItem>
              {hymns.map((hymn) => (
                <MenuItem
                  txt={hymn.txt}
                  link={`/hymn/${hymn.slug}`}
                  onClick={closeIsMenu}
                  key={hymn.slug}
                />
              ))}
            </MenuAccordionDetails>
          </MenuAccorion>
          <MenuLink component={NavLink} to='/score' onClick={closeDrawer}>
            <ListItemIcon>
              <SportsScoreIcon />
            </ListItemIcon>
            <ListItemText>الترتيب</ListItemText>
          </MenuLink>
          <Divider />
        </Box>
        <Stack direction={'row'} justifyContent={'space-between'} px={3}>
          <Typography component='div'>دكنها</Typography>
          <FormControlLabel
            control={
              <MaterialUISwitch
                checked={theme !== 'light'}
                onChange={toggleTheme}
              />
            }
          />
        </Stack>
        <Stack justifyContent={'flex-end'} direction={'row'} my={1} px={2.5}>
          <Button
            disabled={!isLoggedIn}
            variant='contained'
            color='error'
            disableElevation
            sx={{ borderRadius: '100px' }}
            onClick={logOut}
          >
            سجل خروج
          </Button>
        </Stack>

        <Stack
          marginTop={'auto'}
          bgcolor='transparent'
          minHeight='64px'
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'
          px={1.5}
          variant='elevation'
        >
          <Typography component={'span'}>
            اتعمل بالـ❤ مفيش حقوق لـ
            <MUILink href='https://ramfarid.vercel.app' color={'inherit'}>
              رام فريد
            </MUILink>
          </Typography>
          <ButtonGroup>
            <SocialLink href='https://intsgram.com/ramfarid_s'>
              <Instagram />
            </SocialLink>
            <SocialLink href='https://facebook.com/ramfarids'>
              <Facebook />
            </SocialLink>
            <SocialLink href='https://api.whatsapp.com/send?phone=201553706448&text=ما هتلاقيني جنبك ديما .. داخللي واتساب ليه؟\n'>
              <WhatsApp />
            </SocialLink>
          </ButtonGroup>
        </Stack>
      </Box>
    </MUIDrawer>
  )
}

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff'
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}))

const SocialLink = ({ children, href }) => (
  <IconButton size='small' component={MUILink} href={href} target='_blank'>
    {children}
  </IconButton>
)

const MenuLink = styled(MuiMenuItem)(({ theme }) => {
  return {
    borderRadius: '0 100px 100px 0',
    my: 1,
    fontWeight: 700,
    bgcolor: 'background',
    '&.active': {
      backgroundColor: `${theme.palette.action.focus} !important`,
    },
  }
})

export default Drawer
