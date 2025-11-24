import React from 'react';

function Footer() {
    return ( 
        <footer className='border-top'>
        <div className='container my-5 py-5 footer'>
            <div className='row'>

                <div className='col-12 col-md-6 col-lg-3'>
                    <img src='media/logo.svg' alt='zerodha' style={{width:"45%"}} />
                    <p className='rights'>&copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved</p>
                    <div className='social-media'>
                        <i className="fa-brands fa-square-linkedin"></i>
                        <i className="fa-brands fa-square-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-telegram"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                    </div>
                </div>

                <div className='col-12 col-md-6 col-lg-3 nav-col'>
                    <p>Company</p>
                    <a href='#'>About</a><br/>
                    <a href='#'>Products</a><br/>
                    <a href='#'>Pricing</a><br/>
                    <a href='#'>Referral programme</a><br/>
                    <a href='#'>Careers</a><br/>
                    <a href='#'>Zerodha.tech</a><br/>
                    <a href='#'>Press & Media</a><br/>
                    <a href='#'>Zerodha cares (CSR)</a><br/>
                </div>

                <div className='col-12 col-md-6 col-lg-3 nav-col'>
                    <p>Support</p>
                    <a href='#'>Contact</a><br/>
                    <a href='#'>Support portal</a><br/>
                    <a href='#'>Z-Connect blog</a><br/>
                    <a href='#'>List of charges</a><br/>
                    <a href='#'>Downloads & resources</a><br/>
                </div>

                <div className='col-12 col-md-6 col-lg-3 nav-col'>
                    <p>Account</p>
                    <a href='#'>Open an account</a><br/>
                    <a href='#'>Fund transfer</a><br/>
                    <a href='#'>60 day challenge</a><br/>
                </div>

            </div>
            <div className='my-4 pt-4 market-risk'>
                <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>
                <div className='policy'>
                    <a href='#'>NSE</a> 
                    <a href='#'>BSE</a> 
                    <a href='#'>MCX</a> 
                    <a href='#'>Terms & conditions</a> 
                    <a href='#'>Policies & procedures</a> 
                    <a href='#'>Privacy policy</a> 
                    <a href='#'>Disclosure</a> 
                    <a href='#'>For investor's attention</a> 
                    <a href='#'>Investor charter</a>
                </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;