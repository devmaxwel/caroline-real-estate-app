import React from 'react'
import classes from './MainNavigation.module.css';
import {Link} from 'react-router-dom';


 function MainNavigation(){
    return (
        <div>
           <header className={classes.header}>
               <div className={classes.logo}>Fanaka Oasis Realtors</div>
               <nav>
                   <ul>
                       <li className={classes.active}><Link to='/home'>Home</Link></li>
                       <li><Link to='/realtor-profile'>Realtor Profile</Link></li>
                       <li><Link to='/rentals'>Rentals</Link></li>
                       <div className={classes.actions}>
                           <button><Link to='/contact' style={{}}>Contact Us</Link></button>
                       </div> 
                       <div className={classes.menu}>
                           
                       </div>
                                     
                   </ul>
               </nav>
               </header> 
        </div>
    );
}

export default MainNavigation;