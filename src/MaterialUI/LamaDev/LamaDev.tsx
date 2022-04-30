import React from 'react';
import SandBox from './components/SandBox';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import RightBar from './components/RightBar';
import {Stack} from '@mui/material';

const LamaDev = () => {
    return (
        <div>
            {/*<SandBox/>*/}

            <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
                <SideBar/>
                <Feed/>
                <RightBar/>
            </Stack>
        </div>
    );
};

export default LamaDev;