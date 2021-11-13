import React from "react";
import classes from '../UI Card/UICard.module.css';
function UICard(props) {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}

export default UICard;