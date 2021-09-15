import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

function Navbar() {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Manchester United</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About us
                    </NavLink>
                    <NavBtn>
                    <NavBtnLink to="/form">
                        Sign Up
                    </NavBtnLink>
                </NavBtn>
                </NavMenu>
                
            </Nav>
        </>
    )
}

export default Navbar
