import React from 'react'
import classes from './Profile.module.css';
import caro from '../../Images/caro.jpeg';
import logo from '../../Images/favicon.jpeg'




function Profile() {
    return (
      
       
           <div className={classes.container}>

                <div className={classes.profile}>
                    <img src={caro} alt="" />
                   

                </div>
               <div className={classes.desc}>

                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam laudantium obcaecati cumque sunt sapiente provident quam iure assumenda inventore, doloribus a commodi voluptatum est explicabo odio harum omnis numquam corporis blanditiis. Quod officia perspiciatis maiores porro totam, provident assumenda cum voluptates delectus eveniet accusantium quibusdam qui, praesentium facilis debitis ex dicta minus libero iure recusandae culpa voluptatem inventore ut non. Dolores quis obcaecati quia laboriosam incidunt alias rerum cum culpa. Hic, provident ab unde iste quaerat reprehenderit vel libero voluptas nemo esse accusantium rerum neque architecto. Dolorum ea consectetur recusandae excepturi asperiores nostrum, quos cupiditate unde, maiores vitae alias.</p>
                   <div className={classes.socials}>
                   
                   <li><i class="fab fa-facebook"></i></li>
                   <li><i class="fab fa-linkedin"></i></li>
                   <li><i class="fab fa-instagram"></i></li>
                   <li><i class="fab fa-twitter"></i></li>
                     </div>
                     <div className={classes.fanakalogo}>
                         <img src={logo} alt="" />
                         <h2>You are All Welcome</h2>
                     </div>
               </div>


           </div>
    )
}

export default Profile;
