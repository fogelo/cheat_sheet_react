import React from 'react';
import {Button, Container, Typography} from '@mui/material';

const Create = () => {
    return (
        <Container>
            <Typography
                variant={'h6'}
                component={'h2'}
                color={'textSecondary'}
                gutterBottom
            >
                Create a New Note
            </Typography>
            <Button type={'submit'}
                    color={'secondary'}
                    variant={'contained'}
            >
                send</Button>

        </Container>
    );
};

export default Create;