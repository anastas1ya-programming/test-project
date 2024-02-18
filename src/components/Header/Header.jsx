import React from 'react';
import c from './Header.module.css';
import image from "../../asserts/logo.png";
const Header = () =>{
    return(
        <header className={c.header}>
            <img className={c.logo} src={image}/>
        </header>

    )
}
export default Header;