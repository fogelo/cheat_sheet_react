import React from 'react';
import {Button, Slider, styled} from '@mui/material';
import {red} from '@mui/material/colors';

const SandBox = () => {

    const BlueButton = styled(Button)({
        backgroundColor: 'skyblue',
        width: 200,
        color: '#888',
        '&:hover': {
            backgroundColor: 'lightblue',
        }
    })

    return (
        <div>

            <Slider
                defaultValue={60}
                sx={{
                    width: 100,
                    color: 'success.main',

                }}
            />

            <br/>
            <Button variant={'contained'} sx={{
                backgroundColor: 'red',
                width: 100,
                color: 'aquamarine',
                '&:hover': {
                    backgroundColor: red[900],
                }

            }}
            >
                Primary
            </Button>
            <Button variant={'contained'} disabled sx={{
                backgroundColor: 'red',
                width: 100,
                color: 'aquamarine',
                '&:hover': {
                    backgroundColor: red[900],
                },
                '&:disabled': {
                    backgroundColor: 'grey',
                    color: 'white'
                }
            }}
            >
                Primary
            </Button>

            <BlueButton>BlueButton1</BlueButton>
            <BlueButton>BlueButton2</BlueButton>
            <BlueButton>BlueButton3</BlueButton>
        </div>
    );
};

export default SandBox;