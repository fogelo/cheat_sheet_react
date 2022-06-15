import React from 'react';
import './App.css';
import {Console} from './StyledComponents/Console/Console';
import {NavLink} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import {Huddle} from './StyledComponents/Huddle/Huddle';
import TheNetNinja from './MaterialUI/TheNetNinja/TheNetNinja';
import Notes from './MaterialUI/TheNetNinja/components/Notes';
import LamaDev from './MaterialUI/LamaDev/LamaDev';
import {Button} from "@mui/material";
import My from "./My/My";

function App() {
    return (
        <div className="App">
            <Button >add</Button>
            <Routes>
                <Route path={'/huddle'} element={<Huddle/>}/>

                <Route path={'/console'} element={<Console/>}/>

                {/*The Net Ninja*/}
                <Route path={'/the-net-ninja'} element={<TheNetNinja/>}/>
                <Route path={'/the-net-ninja/notes'} element={<Notes/>}/>

                {/*Lama Dev*/}
                <Route path={'/lama-dev'} element={<LamaDev/>}/>

                {/*My*/}
                <Route path={'/my'} element={<My/>}/>

            </Routes>
            <hr/>
            <Navbar/>
        </div>
    );
}

export default App;

const Navbar = () => {

    const style = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: '1.15rem',
        marginBottom: '20px',
    }
    return (
        <div style={style}>
            <div style={{marginLeft: '10px'}}><NavLink to={'console'}>console</NavLink></div>
            <div style={{marginLeft: '10px'}}><NavLink to={'huddle'}>huddle</NavLink></div>
            <div style={{marginLeft: '10px'}}><NavLink to={'the-net-ninja'}>the net ninja</NavLink></div>
            <div style={{marginLeft: '10px'}}><NavLink to={'lama-dev'}>lama dev</NavLink></div>
            <div style={{marginLeft: '10px'}}><NavLink to={'my'}>my</NavLink></div>
        </div>
    )
}