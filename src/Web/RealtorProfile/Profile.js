import React from 'react';
import UICard from '../../Components/UI Card/UICard';
import classes from './Profile.module.css';
import ImgaeProfile from '../../Images/caro.jpeg';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';

 function Profile() {
    return (
       <div>
      <UICard>
         <div className={classes.ul}>

      <div className={classes.image}>
         <img alt='profile' src={ImgaeProfile}></img>
      </div>

      <div className={classes.content}>
      <h3><strong> Realtor</strong> Carolyne </h3>
         <p>What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
 
   <br />    <br />
   <div className={classes.icons}>
   <Link><i class="fab fa-facebook-square"></i></Link>
   <Link><i class="fab fa-instagram-square"></i></Link>
   <Link><i class="fab fa-linkedin"></i></Link>
   <Link><i class="fab fa-twitter-square"></i></Link>

   </div>
      </div>
      
      </div>
   </UICard>
   
   <Footer />
   </div>
    );
}

export default Profile;
