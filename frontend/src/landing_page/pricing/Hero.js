import React from 'react';

function Hero() {
    return ( 
        <div className='container mt-5 py-5 '>
            <div className='row text-center my-5 border-bottom'>

                <h2>Pricing</h2>
                <h5 className='text-muted my-4 pb-5'>Free equity investments and flat ₹20 traday and F&O trades</h5>
            </div>
            <div className='row text-center mt-5 border-bottom'>
                <div className='col-lg-4 p-5'>
                    <img src="media/pricing0.svg" />
                    <h1 className='fs-3 mb-4'>Free equity delivery</h1>
                    <p className='text-muted p-2'>All equity delivery investments (NSE, BSE), are absolutely free - 0 brokerage.</p>
                </div>

                <div className='col-lg-4 p-5'>
                    <img src="media/pricing20.svg"  />
                    <h1 className='fs-3 mb-4'>Intraday and F&O trades</h1>
                    <p className='text-muted text-center'>Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
                </div>

                <div className='col-lg-4 p-5'>
                    <img src="media/pricing0.svg" />
                    <h1 className='fs-3 mb-4'>Free direct MF</h1>
                    <p className='text-muted p-2'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>

            </div>
        </div>
    );
}

export default Hero;