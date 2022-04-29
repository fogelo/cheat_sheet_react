import React from 'react';
import Create from './components/Create';
import {red} from '@mui/material/colors';
import {createTheme, ThemeProvider} from '@mui/material';

const MaterialUi = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: red[500],
            },
            secondary: red,
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Create/>
            </div>
        </ThemeProvider>
    );
};

export default MaterialUi;