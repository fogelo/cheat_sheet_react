import React, {useState} from 'react';
import {
    AppBar,
    Avatar,
    Badge,
    createTheme,
    IconButton,
    InputBase, Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {deepOrange} from '@mui/material/colors';


// const theme = createTheme({})


const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})
const Search = styled('div')(({theme}) => ({
    backgroundColor: 'white',
    color: 'black',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%'
}))
const Icons = styled('div')(({theme}) => ({
    display: 'none',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up('sm')]: {
        display: 'flex'
    }

}))
const UserBox = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    [theme.breakpoints.up('sm')]: {
        display: 'none'
    }

}))


const Navbar = () => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = ()=>{
        setOpen(false)
    }
    return (
        <AppBar position={'static'}>
            <StyledToolbar>
                <Typography variant={'h6'} sx={{display: {xs: 'none', sm: 'block'}}}>LAMA DEV</Typography>
                <PetsIcon sx={{display: {xs: 'block', sm: 'none'}}}/>
                <Search><InputBase placeholder={'search...'}/></Search>
                <Icons>
                    <IconButton sx={{color: 'white'}}>
                        <Badge badgeContent={4} color="error">
                            <MailIcon/>
                        </Badge>
                    </IconButton>
                    <IconButton sx={{color: 'white'}}>
                        <Badge badgeContent={5} color="error">
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                    <Avatar sx={{bgcolor: deepOrange[500]}} onClick={handleOpen}>A</Avatar>
                </Icons>
                <UserBox>
                    <Avatar sx={{bgcolor: deepOrange[500]}} onClick={handleOpen}>A</Avatar>
                    <Typography variant={'body1'} onClick={handleOpen}>Anton</Typography>
                </UserBox>
                <Menu
                    id="basic-menu"
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    sx={{marginTop: '80px'}}
                >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
            </StyledToolbar>
        </AppBar>
    );
};

export default Navbar;