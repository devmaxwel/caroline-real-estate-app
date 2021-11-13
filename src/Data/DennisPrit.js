import React from 'react'

import img1 from './imgData/31.jpeg'
import img2 from './imgData/32.jpeg'
import img3 from './imgData/33.jpeg'
import img4 from './imgData/34.jpeg'
import img5 from './imgData/35.jpeg'
import img6 from './imgData/36.jpeg'
import img7 from './imgData/37.jpeg'
import img8 from './imgData/38.jpeg'
import img9 from './imgData/39.jpeg'
import img10 from './imgData/40.jpeg'

export default function DennisPrit() {
    return (
        <div>
       <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
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
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}

