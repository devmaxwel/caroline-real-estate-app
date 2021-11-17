import React from 'react'
import { Link } from 'react-router-dom';
import MainUICard from '../../Components/UI Card/MainUICard';
import classes from './Houses.module.css';
import SkylineApart from '../../Data/SkylineApart';
import G01 from '../../Data/G01';
import Skyline from '../../Data/Skyline';
import DennisPrit from '../../Data/DennisPrit';
import Footer from '../../Footer/Footer';

 function Houses(props) {

    return (
        <div>
        <div className={classes.ul} >

           <div className={classes.image}>
            <MainUICard >
                <div>
                   <SkylineApart />
                   
                </div>

                    <div className={classes.desc}>
                        <h2>801, Skyline Apartments</h2>
                        <h2>Karen, Nairobi</h2>
                        <h2 className={classes.price}>$160 / Night</h2>
                    </div>
                    <div className={classes.actions}>
                    <button><Link  style={{textDecoration: 'none', color:'#77002e'}} to={{pathname: ''}} target='_blank'>Book Now</Link></button> 
                        <button><Link  style={{textDecoration: 'none', color:'#77002e'}} to='/contact'>Inquiries?</Link></button>
                    </div>
                </MainUICard>    
           </div>
                
            <div className={classes.image}>
            <MainUICard>

               <G01 />

                <div className={classes.desc}>
                    <h2>GO1, Skyline Apartments</h2>
                    <h2>Karen, Nairobi</h2>
                   
                    <h2 className={classes.price}>$180 / Night</h2>
                </div>
                <div className={classes.actions}>
                     <button><Link  style={{textDecoration: 'none', color:'#77002e'}} to={{pathname: ''}} target='_blank'>Book Now</Link></button> 
                    <button><Link  style={{textDecoration: 'none', color:'#77002e'}} to='/contact'>Inquiries?</Link></button>
                </div>
             </MainUICard>
            </div>

          

            <div className={classes.image}>
            <MainUICard>
            <Skyline />
         

            <div className={classes.desc}>
                    <h2>102, Skyline Apartments</h2>
                    <h2>Karen, Nairobi</h2>
                  
                    <h2 className={classes.price}>$190 / Night</h2>
             </div>
                <div className={classes.actions}>
                <button><Link  style={{textDecoration: 'none', color:'#77002e'}} to={{pathname: ''}} target='_blank'>Book Now</Link></button> 
                    <button><Link  style={{textDecoration: 'none', color:'#77002e'}} to='/contact'>Inquiries?</Link></button>
                </div>
            </MainUICard>
            </div>
           
           

            <div className={classes.image}>
            <MainUICard>
            <DennisPrit />
           

            <div className={classes.desc}>
                    <h2>Dennis Prit Garden</h2>
                    <h2>Lavington, Nairobi</h2>
                    <h2 className={classes.price}>$170 / Night</h2>
                   
                </div>
                <div className={classes.actions}>
                <button><Link  style={{textDecoration: 'none', color:'#77002e'}} to={{pathname: ''}} target='_blank'>Book Now</Link></button> 
                    <button><Link  style={{textDecoration: 'none', color:'#77002e'}} to='/contact'>Inquiries?</Link></button>
                </div>
            </MainUICard>
            </div>

         

           {props.children} 
        
        </div>
        <Footer />
        </div>
    )
}

export default Houses;