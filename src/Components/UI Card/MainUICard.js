import React from 'react'
import classes from './MainUICard.module.css';

 function MainUICard(props) {
    return (
        <div className={classes.card}>

            {props.children}
        </div>
    )
}

export default MainUICard;