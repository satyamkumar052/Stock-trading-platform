import React from 'react';


function Hero() {
    return ( 
        <div className='py-4' style={{backgroundColor:"#367DCC",color:"#fff"}}>
            <div className='container mt-5 pt-5'>
                <div className='row'>

                    <div className='col-lg-4 offset-1'>
                        <h1 className='fs-5 mb-5 '>Support portal</h1>
                        <h1 className='pt-3 fs-4'>Search for an answer or browse help topics to create a ticket</h1>
                        <input className='w-100 rounded-4 p-4 my-3' style={{border:"none"}} type='text' placeholder='Eg: how do i activate F&O, why is my order getting rejected...'></input>
                        <div className='portal-links pb-5'>
                            <a className='me-3' href='#'>Track account opening</a>
                            <a className='me-3' href='#'>Track segment activation</a>
                            <a className='me-3' href='#'>Intraday margins</a>
                            <a className='me-3' href='#'>Kite user manual</a>
                        </div>
                    </div>

                    <div className='col-lg-4 offset-2'>
                        <p className='d-flex flex-row-reverse' ><a href='#' style={{textDecorationLine:"underline",color:"#fff"}}>Track Tickets</a></p>
                        <h1 className='fs-4 pt-5'>Featured</h1>
                        <ol style={{textDecorationLine:"underline"}}>
                            <a><li>Current Takeovers and Delisting - January 2024</li></a>
                            <a><li>Latest Intraday leverages - MIS & CO</li></a>
                        </ol>
                    </div>
                    
                </div>                
            </div>
        </div>
    );
}

export default Hero;