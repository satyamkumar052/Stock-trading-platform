import React from 'react';

function Education() {
    return ( 
        <div className='container my-5 p-5'>
            <div className='row'>
                <div className='col-lg-6'>
                    <img src='media/education.svg' style={{width:"80%"}} />
                </div>
                
                <div className='col-lg-6 '>
                    <h1 className='fs-4 mb-5'>Free and open market education</h1>
                    <div>
                        <p>Varsity, the largest online stock market education book in the world covering everything from basics to advance trading</p>
                        <a className='p2'>Versity <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className='mt-5'>
                        <p>TradingQ&A, the most active trading and investment community in India for all your market related queries</p>
                        <a className='p2'>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Education;