import React from 'react';


function Universe() {
    return ( 
        <div className='container mb-5 py-4 text-center'>
            <div className='row text-muted'>
                <h1 className='fs-2  mb-3'>The Zerodha Universe</h1>
                <p className='fs-5 mb-5'>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-4 p-4 '>
                    <img src="media/zerodhaFundhouse.png" style={{width:"80%",paddingLeft:"6rem",marginBottom:"2rem"}} />
                    <p className='ps-5 mb-4'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src="media/sensibullLogo.svg" style={{width:"80%",paddingLeft:"6rem",marginBottom:"2rem"}} />
                    <p className='ps-5 mb-4'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
</p>
                </div>
                <div className='col-4 p-4'>
                    <img src="media/tijori.svg" style={{width:"80%",paddingLeft:"6rem",marginBottom:"2rem"}} />
                    <p className='ps-5 mb-4'>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>

                <div className='col-4 p-4 '>
                    <img src="media/streakLogo.png" style={{width:"80%",paddingLeft:"6rem",marginBottom:"2rem"}} />
                    <p className='ps-5 mb-4'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src="media/smallcaseLogo.png" style={{width:"80%",paddingLeft:"6rem",marginBottom:"2rem"}} />
                    <p className='ps-5 mb-4'>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src="media/dittoLogo.png" style={{width:"70%",paddingLeft:"6rem",marginBottom:"2rem"}} />
                    <p className='ps-5 mb-4'>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>
                <button className='col-3 m-auto btn btn-primary btn-lg my-3'>Sign up for free</button>
            </div>
        </div>
    );
}

export default Universe;