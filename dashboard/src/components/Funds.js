import React from 'react';
import { Link } from 'react-router-dom';



function Funds() {
    return (
        <>
            <div className='funds'>
                <p>Instant, zero-cost fund transfers with UPI</p>
                <Link className='btn btn-primary'>Add funds</Link>
                <Link className='btn btn-primary'>Withdraw</Link>
            </div>

            <div className='row funds-table'>
                <div className='col'><p>Equity</p></div>

                <div className='table'>
                    <div className='data1'>
                        <p>Available margin</p>
                        <p>4,043.10</p>
                    </div>
                    <div className='data1'>
                        <p>Used margin</p>
                        <p>3,757.30</p>
                    </div>
                    <div className='data1'>
                        <p>Available cash</p>
                        <p>4,043.10</p>
                    </div><hr />
                    <div className="data1">
                        <p>Opening Balance</p>
                        <p>4,043.10</p>
                    </div>
                    <div className="data1">
                        <p>Opening Balance</p>
                        <p>3736.40</p>
                    </div>
                    <div className="data1">
                        <p>Payin</p>
                        <p>4064.00</p>
                    </div>
                    <div className="data1">
                        <p>SPAN</p>
                        <p>0.00</p>
                    </div>
                    <div className="data1">
                        <p>Delivery margin</p>
                        <p>0.00</p>
                    </div>
                    <div className="data1">
                        <p>Exposure</p>
                        <p>0.00</p>
                    </div>
                    <div className="data1">
                        <p>Options premium</p>
                        <p>0.00</p>
                    </div>
                        <hr />
                    <div className="data1">
                        <p>Collateral (Liquid funds)</p>
                        <p>0.00</p>
                    </div>
                    <div className="data1">
                        <p>Collateral (Equity)</p>
                        <p>0.00</p>
                    </div>
                    <div className="data1">
                        <p>Total Collateral</p>
                        <p>0.00</p>
                    </div>
                </div>
                <div className="col">
                    <div className="commodity">
                        <p>You don't have a commodity account</p>
                        <Link className="btn btn-primary">Open Account</Link>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Funds;