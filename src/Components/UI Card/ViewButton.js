import React from 'react'
import classes from './button.module.css'

const ViewButton = ({onclick=null, children= null}) => (
   <div  className={classes.actions}>
        <button onclick={onclick}>{children} <i class="fas fa-building"></i></button>
   </div>
)

export default ViewButton;