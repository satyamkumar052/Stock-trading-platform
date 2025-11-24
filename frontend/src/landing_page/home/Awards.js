import React from 'react';

function Awards() {
    return ( 
        <div className='container my-5'>
            <div className='row '>
                <div className='col-lg-6 '>
                    <img src='media/largestBroker.svg'></img>
                </div>
                <div className='col-lg-6 mt-3'>
                    <h1 className='fs-2'>Largest stock broker in India</h1>
                    <p className='pb-3'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <ul>
                        <div className='row'>
                            <div className='col-6'>
                                <p><li>Futures and Options</li></p>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </div>
                            <div className='col-6'>
                                <li><p>Stocks and IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Golds</p></li>
                            </div>
                        </div>
                    </ul>
                    <img src='media/pressLogos.png' style={{width:"85%"}} />
                </div>
            </div>
        </div>
    );
}

export default Awards;