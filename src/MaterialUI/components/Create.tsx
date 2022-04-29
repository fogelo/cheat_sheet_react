import React from 'react';
import {Button, Container, Typography} from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

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
                    size={'small'}
                    endIcon={<SendOutlinedIcon/>}
            >
                send
            </Button>

            <br/>
            <AcUnitIcon fontSize={'small'}/>
            <AcUnitIcon fontSize={'medium'}/>
            <AcUnitIcon fontSize={'large'}/>
        </Container>
    );
};

export default Create;