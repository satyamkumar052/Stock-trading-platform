import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top border-bottom">
            <div className="container">
                <Link className="navbar-brand " to="/"><img src='media/logo.svg' alt='zerodha' style={{width:"25%"}} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                

                <form className="d-flex my-lg-0 nav-form mb-5" role="search">
                <ul className="navbar-nav me-auto mb-2 ">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/product">Products</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/pricing">Pricing</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/support">Support</Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href=''><i class="fa-solid fa-bars burger"></i></a>
                    </li>
                </ul>
                </form>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;