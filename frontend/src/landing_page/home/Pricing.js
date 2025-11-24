import React from 'react';

function Pricing() {
    return ( 
        <div className='container my-5 p-5'>
            <div className='row'>
                <div className='col-lg-4'>
                    <h1 className='fs-2'>Unbeatable Pricing</h1>
                    <p className='mt-4'>we pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a className='p2'>See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>

                <div className='col-2'></div>
                
                <div className='col-lg-6'>
                    <table className='table text-center' >                        
                        <tr>
                            <td className='border py-4'><p className='fs-2'>₹0</p>Free equity delivery and<br/>direct mutual funds</td>
                            <td className='border py-4'><p className='fs-2'>₹20</p>Intraday and F&amp;O</td>
                        </tr>
                    </table>
                </div>
            </div>
            
        </div>
    );
}

export default Pricing;