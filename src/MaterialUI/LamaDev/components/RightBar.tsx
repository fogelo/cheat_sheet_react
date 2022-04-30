import React from 'react';
import {Avatar, AvatarGroup, Box, Typography} from '@mui/material';
import Images from './Images';

const RightBar = () => {
    return (
        <Box
             flex={2}
             p={2}
             sx={{display: {xs: 'none', sm: 'block'}}}>
            <Box position={'fixed'}>
                <Typography variant={'h6'} color={'textSecondary'} mb={2} mt={2}>Online Friends</Typography>
                <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                    <Avatar alt="Travis Howard" src=""/>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"/>
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg"/>
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg"/>
                </AvatarGroup>
                <Typography variant={'h6'} color={'textSecondary'} mb={2} mt={2}>Latest Photo</Typography>
                <Images/>
            </Box>
        </Box>
    );
};

export default RightBar;