import React from 'react'
import img1 from '../Home/imgs/8.jpeg'
import img2 from '../Home/imgs/11.jpeg'
import img3 from '../Home/imgs/21.jpeg'
import img4 from '../Home/imgs/31.jpeg'
import  classes from './Slider.module.css'
import { Link } from 'react-router-dom'
import './slider.css'
import ViewButton from '../Components/UI Card/ViewButton'
import Footer from '../Footer/Footer'




export default function Slder() {
    return (
<div>
      <div className={classes.container}>
        
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
      <Link to='/rentals'><h2>  <ViewButton> View Home <i class="fas fa-arrow-circle-right"></i>   </ViewButton></h2></Link>
      
      </div>
    </div>

    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h2>G01 Skyline Apartments</h2>
     <Link to='/rentals'><h2>  <ViewButton> View Home <i class="fas fa-arrow-circle-right"></i>  </ViewButton></h2></Link>
      
      </div>
    </div>

    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
      <Link to='/rentals'><h2>  <ViewButton> View Home <i class="fas fa-arrow-circle-right"></i> </ViewButton></h2></Link>
       
      </div>
    </div>

    <div class="carousel-item">
      <img src={img4} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
      <Link to='/rentals'><h2>  <ViewButton> View Home <i class="fas fa-arrow-circle-right"></i> </ViewButton></h2></Link>
       
      </div>
    </div>

  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    
    <Footer />
    </div>
    )

}
