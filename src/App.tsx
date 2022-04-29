import React from 'react';
import './App.css';
import {Console} from './StyledComponents/Console/Console';
import {NavLink} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import {Huddle} from './StyledComponents/Huddle/Huddle';
import MaterialUi from './MaterialUI/MaterialUI';

function App() {
    return (
        <div className="App">
            <Navbar/>

            <Routes>
                <Route path={'/huddle'} element={<Huddle/>}/>
                <Route path={'/console'} element={<Console/>}/>
                <Route path={'/the-net-ninja'} element={<MaterialUi/>}/>
            </Routes>

        </div>
    );
}

export default App;

const Navbar = () => {

    const style = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: '1.15rem'
    }
    return (
        <div style={style}>
            <div style={{marginLeft: '10px'}}><NavLink to={'console'}>console</NavLink></div>
            <div style={{marginLeft: '10px'}}><NavLink to={'huddle'}>huddle</NavLink></div>
            <div style={{marginLeft: '10px'}}><NavLink to={'the-net-ninja'}>the net ninja</NavLink></div>
        </div>
    )
}