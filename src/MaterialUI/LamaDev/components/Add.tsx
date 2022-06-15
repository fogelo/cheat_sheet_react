import React, {useState} from 'react';
import {Avatar, Box, Fab, Modal, Stack, styled, TextField, Tooltip, Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {deepOrange} from '@mui/material/colors';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';


const Add = () => {

    const [open, setOpen] = useState(false)

    const StyledModel = styled(Modal)({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    })

    const UserBox = styled(Box)({
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        margin: '10px 0px'
    })

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            <Tooltip onClick={handleOpen} title="Add"
                     sx={{position: 'fixed', bottom: 20, left: {xs: 'calc(50% - 25px)', md: 30}}}>
                <Fab color="primary" aria-label="add">
                    <AddIcon/>
                </Fab>
            </Tooltip>
            <StyledModel disableScrollLock
                         open={open}
                         onClose={handleClose}
            >
                <Box width={400} height={280} bgcolor={'background.default'} color={'text.primary'} p={3} borderRadius={5}>
                    <Typography variant={'h6'} color={'gray'}>Create Post</Typography>
                    <UserBox>
                        <Avatar sx={{bgcolor: deepOrange[500]}} onClick={handleOpen}>A</Avatar>
                        <Typography variant={'body2'}>Anton Orlov</Typography>
                    </UserBox>
                    <TextField
                        id="filled-multiline-static"
                        multiline
                        rows={4}
                        variant="standard"
                        fullWidth
                        placeholder={'What\'s on your mind?'}
                    />
                    <Stack direction={'row'} gap={1} mt={2} mb={3}>
                        <EmojiEmotionsIcon color={'primary'}/>
                        <EmojiObjectsIcon color={'secondary'}/>
                        <EmojiEventsIcon color={'success'}/>
                        <EmojiNatureIcon color={'error'}/>
                    </Stack>
                </Box>
            </StyledModel>
        </>
    )
}

export default Add;