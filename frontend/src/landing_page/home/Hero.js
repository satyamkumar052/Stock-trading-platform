import React from 'react';
import { useNavigate } from 'react-router-dom';
 
function Hero() {

    const navigation = useNavigate();

    return ( 
        <div className='container p-5 mt-4'>
            <div className='row text-center'>
                <img src="media/homeHero.png" alt='Hero Image' className='mb-5'/>
                <div className='m-auto mt-5'>
                    <h1>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                    <button onClick={() => navigation("/signup")} className='btn btn-primary btn-lg px-5 my-3'>
                        Signup now for free
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;