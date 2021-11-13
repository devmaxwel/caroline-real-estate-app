import React from 'react'
import MainUICard from '../UI Card/MainUICard';
import classes from './Form.module.css';
import logo from '../../Images/favicon.jpeg'
import Footer from '../../Footer/Footer'

 function ContactForm() {
    return (
       
    <div>
       <MainUICard>
           <div className={classes.flex}> 
                <form action="" method="post" className={classes.form}>

                   

                    <div className={classes.control}>
                        <label htmlFor="Name">Name</label>
                        <input type="text" id='number' required />
                    </div>

                    <div className={classes.control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' required />
                    </div>

                    <div className={classes.control}>
                        <label htmlFor="nuber">Phone Number</label>
                        <input type="text" id='number' required />
                    </div>

                    <div className={classes.control}>
                        <label htmlFor="message">Message</label>
                        <textarea name="" id="message" cols="50" rows="5"></textarea>
                    </div>
                    <br /><br />

                    
                    <div className={classes.actions}>
                        <button>Send Message</button>
                    </div>     
            </form>

            <img src={logo} alt="" />

            
        </div>
       </MainUICard>
       
       <Footer />
       </div>
    )
}

export default ContactForm;
