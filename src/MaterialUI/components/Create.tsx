import React from 'react';
import {Typography} from '@mui/material';

const Create = () => {
    return (
        <div>
            <Typography
                variant={'h6'}
                component={'h2'}
                color={'textSecondary'}
                gutterBottom
            >
                Create a New Note
            </Typography>
        </div>
    );
};

export default Create;