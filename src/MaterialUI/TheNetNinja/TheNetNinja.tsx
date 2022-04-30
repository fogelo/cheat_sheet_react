import React from 'react';
import Create from './components/Create';
import {purple} from '@mui/material/colors';
import {createTheme, ThemeProvider} from '@mui/material';


const TheNetNinja = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: purple[500],
            },
            secondary: purple,
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

export default TheNetNinja;