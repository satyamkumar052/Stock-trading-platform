import React from 'react';


function Summary() {
    return (
        <div style={{marginLeft:"3rem"}} className='summary-container'>
            <div className='username'>
                <h6>Hi, User!</h6>
                <hr className='divider' />
            </div>

            <div className='section'>
                <span>
                    <p>Equity</p>
                </span>
                <div className='data'>
                    <div className='first'>
                        <h3>3.74K</h3>
                        <p>Margin available</p>
                    </div>
                    <hr />
                    <div className='second'>
                        <p>Margin used 0</p>
                        <p>Opening balance 3.74K</p>
                    </div>
                </div>
                <hr className='divider' />
            </div>

            <div className='section'>
                <span>
                    <p>Holdings {13}</p>
                </span>
                <div className='data'>  
                    <div className='first'>
                        <h3 className='profit'>1.55K <small> +5.20% </small></h3>
                        <p>P&L</p>
                    </div>
                    <hr />
                    <div className='second'>
                        <p>Current value {31.43}K</p>
                        <p>Investment {29.88}K</p>
                    </div>
                </div>
                <hr className='divider' />
            </div>

        </div>
    );
}

export default Summary;