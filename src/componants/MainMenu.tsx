
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import AppleIcon from '@mui/icons-material/Apple';

const MainMenu = () => {
    return (
        <>
            <AppBar position='absolute'>
                <Toolbar>
                    <IconButton size='large' edge="start" color="inherit" aria-label='logo'>
                        <AppleIcon />
                    </IconButton>
                    <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>
                        MyApp
                    </Typography>
                    <Stack direction='row' spacing={2}>
                        <Button color='inherit'>Services</Button>
                        <Button color='inherit'>Pricing</Button>
                        <Button color='inherit'>Testimonial</Button>
                        <Button color='inherit'>Contact Us</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default MainMenu
