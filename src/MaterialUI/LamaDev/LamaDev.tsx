import React, {useState} from 'react';
import SandBox from './components/SandBox';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import RightBar from './components/RightBar';
import {Box, createTheme, Stack, ThemeProvider} from '@mui/material';
import Navbar from './components/Navbar';
import Add from './components/Add';


export type ModeT = 'light' | 'dark'
export const LamaDev = () => {
    const [mode, setMode] = useState<ModeT>('light')

    const theme = createTheme({
        palette: {
            mode: mode,
        }
    })


    return (
        <ThemeProvider theme={theme}>
            <Box bgcolor={'background.default'} color={'text.primary'}>
            {/*<SandBox/>*/}
            <Navbar/>
            <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
                <SideBar setMode={setMode} mode={mode}/>
                <Feed/>
                <RightBar/>
            </Stack>
            <Add/>
        </Box>
        </ThemeProvider>
    )
}


export default LamaDev;