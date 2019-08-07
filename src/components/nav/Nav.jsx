import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from 'react-router-dom';


const Nav = ()=>{
    return(
        <nav className={classes.nav}>
            <NavLink className={classes.a} to="/contents">Profile</NavLink>
            <NavLink className={classes.a} to="/dialogs">Messages</NavLink>
            <NavLink className={classes.a} to="/news">News</NavLink>
            <NavLink className={classes.a} to="/music">Music</NavLink>
            <NavLink className={classes.a} to="/settings">Settings</NavLink>
        </nav>
    )
}

export default Nav;