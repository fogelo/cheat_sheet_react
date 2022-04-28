import React from 'react';
import './App.css';
import {StyledComponent} from './StyledComponents/StyledComponent';
import {NavLink} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import {Huddle} from './Huddle/Huddle';


function App() {
    return (
        <div className="App">
            <Navbar/>

            <Routes>
                <Route path={'/styled-component'} element={<StyledComponent/>}/>
                <Route path={'/huddle'} element={<Huddle/>}/>
            </Routes>

        </div>
    );
}

export default App;

const Navbar = () => {
    return (
        <>
            <NavLink to={'styled-component'} style={{marginLeft: '10px'}}>styled-component</NavLink>
            <NavLink to={'huddle'} style={{marginLeft: '10px'}}>huddle</NavLink>
        </>
    )
}