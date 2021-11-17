import React from 'react'
import './Form.css';
 function ContactForm() {
    return (
        <div class="wrapper">
        <div class="overlay">
        <div class="row d-flex justify-content-center align-items-center">
            <div class="col-md-9">
                <div class="contact-us text-center">
                    <h3>Contact Us</h3>
                    <p class="mb-5">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mt-5 text-center px-3">
                                <div class="d-flex flex-row align-items-center"> <span class="icons"><i class="fa fa-map-marker"></i></span>
                                    <div class="address text-left"> <span>Address</span>
                                        <p>Kileleshwa Nairobi</p>
                                    </div>
                                </div>
                                <div class="d-flex flex-row align-items-center mt-3"> <span class="icons"><i class="fa fa-phone"></i></span>
                                    <div class="address text-left"> <span>Phone</span>
                                        <p>+254 728-479-603</p>
                                    </div>
                                </div>
                                <div class="d-flex flex-row align-items-center mt-3"> <span class="icons"><i class="fa fa-envelope-o"></i></span>
                                    <div class="address text-left"> <span>Address</span>
                                        <p>fanaukgoods@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="text-center px-1">
                                <div class="forms p-4 py-5 bg-white">
                                    <h5>Send Message</h5>
                                    <div class="mt-4 inputs">

                                       <form action="https://send.pageclip.co/g6Rb5VsNVhVFxtoPOqxaMjcnuThxkth1" class="pageclip-form" method="post">
                                           <fieldset>
                                                <input type="text" class="form-control" placeholder="Name" required /> 

                                        <input type="text" class="form-control" placeholder="Email" required /> 

                                        <textarea class="form-control" placeholder="Type your message" required></textarea>
                                            <div class="button mt-4 text-left"> 
                                            <button class="btn btn-dark">Send</button> 
                                            </div>
                                           </fieldset>
                                       </form>
                                    </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
     </div>
     </div>
    )
}

export default ContactForm;
