import React from 'react'

import img1 from './imgData/21.jpeg'
import img2 from './imgData/22.jpeg'
import img3 from './imgData/23.jpeg'
import img4 from './imgData/24.jpeg'
import img5 from './imgData/25.jpeg'
import img6 from './imgData/26.jpeg'
import img7 from './imgData/27.jpeg'
import img8 from './imgData/28.jpeg'
import img9 from './imgData/29.jpeg'
import img10 from './imgData/30.jpeg'

export default function Skyline() {
    return (
        <div>
           <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..." />
    </div>

    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..." />
    </div>

    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..." />
    </div>

    <div class="carousel-item">
      <img src={img4} class="d-block w-100" alt="..." />
    </div>
    
    <div class="carousel-item">
      <img src={img5} class="d-block w-100" alt="..." />
    </div>

    <div class="carousel-item">
      <img src={img6} class="d-block w-100" alt="..." />
    </div>
    
    <div class="carousel-item">
      <img src={img7} class="d-block w-100" alt="..." />
    </div>

    <div class="carousel-item">
      <img src={img8} class="d-block w-100" alt="..." />
    </div>
    
    <div class="carousel-item">
      <img src={img9} class="d-block w-100" alt="..." />
    </div>

    <div class="carousel-item">
      <img src={img10} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
        </div>
    )
}
