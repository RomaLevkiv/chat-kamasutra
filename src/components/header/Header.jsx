import React from 'react';
import classes from './Header.module.css';


const Header = ()=>{
    return(
        <header className={classes.header}>
            <img className={classes.img} src="https://newsdotsportslogosdotnet.files.wordpress.com/2012/06/headerlogoleft.png?w=584" />
            <span>Go to your dream!</span>
            
        </header>
    )
}

export default Header;