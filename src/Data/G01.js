import React from 'react'
import img1 from './imgData/11.jpeg'
import img2 from './imgData/12.jpeg'
import img3 from './imgData/13.jpeg'
import img4 from './imgData/14.jpeg'
import img5 from './imgData/15.jpeg'
import img6 from './imgData/16.jpeg'
import img7 from './imgData/17.jpeg'
import img8 from './imgData/18.jpeg'
import img9 from './imgData/19.jpeg'
import img10 from './imgData/20.jpeg'

export default function G01() {
    return (
        <div>
              <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
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
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}
