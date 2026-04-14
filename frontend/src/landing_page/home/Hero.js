import React from 'react';
import { Link } from 'react-router-dom';
 
function Hero() {

    return ( 
        <div className='container p-5 mt-4'>
            <div className='row text-center'>
                <img src="media/homeHero.png" alt='Hero Image' className='mb-5'/>
                <div className='m-auto mt-5'>
                    <h1>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                    <Link to="/signup" className='btn btn-primary btn-lg px-5 my-3'>
                        Signup now for free
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;