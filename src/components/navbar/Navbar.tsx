

import React from 'react'
import "./navbar.css"

interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = ({}) => {
        return (
             <div className="navbar"> 
<div className="navContainer">
    <span className="logo">Osagie looking</span>
    <div className="navItems">
        <button className="navButton">Register</button>
        <button className="navButton">Login</button>
    </div>
</div>
             </div>
        );
}