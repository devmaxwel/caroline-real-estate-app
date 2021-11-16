import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../MainNavigation/MainNavigation.css';

function MainNavigation() {
   const [responsive, setIsResponsive] = useState(false)

    return (
        <nav className="navbar">
            <h1 className="logo">Fanaka Oasis Realtors</h1>
            <ul className={responsive ? "nav-links-mobile" : "nav-links"}
                onClick={() => setIsResponsive(false)}>
                <Link to='/' className="home"><li>Home</li></Link>
                <Link to='/realtor-profile' className="about"><li>About</li></Link>
                <Link to='/rentals' className="rentals"><li>rentals</li></Link>
              <div className="actions">
             <Link to='/contact'> <button>Contact Us</button></Link>
              </div>
            </ul>

            <div className="mobile-menu-icon" onClick ={() => setIsResponsive(responsive)}>
                {responsive ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>}

            </div>

        </nav>
    )
}

export default MainNavigation
