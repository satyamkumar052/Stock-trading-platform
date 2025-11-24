import React from 'react';


function Hero() {
    return ( 
        <div className='container text-center my-5 py-5'>
            <div className='row mb-5'>
            <h1 className='mt-5 pt-3 fs-2'>Zerodha Products</h1>
            <h2 className='fs-3 text-muted my-3'>Sleek, modern and intuitive trading platforms</h2>
            <p className='opacity-75 mb-5 pb-5 fs-5'>Check out our <a href='#'>investment offerings <i class="fa-solid fa-arrow-right-long"></i></a></p>
            </div>
            <hr/>
        </div>
    );
}

export default Hero;