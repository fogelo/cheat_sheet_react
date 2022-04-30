import React from 'react';
import SandBox from './components/SandBox';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import RightBar from './components/RightBar';
import {Stack} from '@mui/material';
import Navbar from './components/Navbar';

const LamaDev = () => {
    return (
        <div>
            {/*<SandBox/>*/}
            <Navbar/>
            <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
                <SideBar/>
                <Feed/>
                <RightBar/>
            </Stack>
        </div>
    );
};

export default LamaDev;