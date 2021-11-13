import React from "react";
import classes from '../Layout/Layout.module.css';
import MainNavigation from '../MainNavigation/MainNavigation';

function Layout(props){
    return(
        <div>
            <MainNavigation />
          <main  className={classes.main}>  {props.children} </main>

        </div>
    );
}

export default Layout;