import React from 'react';
import "./Stats.css";

function Stats() {
    return ( 
        <div className='container mt-5 p-3'>
            <div className='row'>
                <div className='col-lg-6 p-5'>
                    <h1 className='fs-2'>Trust with confidence</h1>
                    <div className='mt-5 change-fade'>
                        <div className='stats-desc' >
                            <h2 className='fs-4'>Customer-first always</h2>
                            <p>That's why 1.3+ crore customers trust Zerodha with ₹3.5+<br/>lakh crore worth of equity investments.</p>
                        </div>
                        <div>
                            <h2 className='fs-4'>No spam or gimmicks</h2>
                            <p>No gimmicks, spam, "gamification", or annoying push<br/>notifications. High quality apps that you use at your pace,<br/>the way you like.</p>
                        </div>
                        <div>
                            <h2 className='fs-4'>The Zerodha universe</h2>
                            <p>Not just app, but a whole ecosystem. Our investments<br/>in 30+ fintech startups offer you tailored services specific to<br/>your needs.</p>
                        </div>
                        <div>
                            <h2 className='fs-4'>Do better with money</h2>
                            <p>with initatives like Nudge and Kill Switch, we don't just<br/>facilitate transactions, but actively help you do better with<br/>your money.</p>
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 p-5'>
                    <img src='media/ecosystem.png' style={{width:"100%", height:"80%"}}/>
                    <div className='offset-1 mt-3'>
                        <a className='p2 mx-5'>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a className='p2'>try kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Stats;