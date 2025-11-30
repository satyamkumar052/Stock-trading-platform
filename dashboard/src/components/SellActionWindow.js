import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import GeneralContext from './GeneralContext';

const SellActionWindow = ({uid, availableQty})=> {
    const { closeSellWindow } = useContext(GeneralContext);

    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);

    const handleSellClick = async()=>{

        if(Number(stockQuantity) > Number(availableQty)) {
            alert("Not Enough Stocks");
            return;
        }

        axios.post("https://backend-8k3f.onrender.com/newOrder",{
            name:uid,
            qty:stockQuantity,
            price:stockPrice,
            mode:"SELL",
        });
        closeSellWindow();
    };

    const handleCancelClick = ()=>{
        closeSellWindow();
    }
    
    return (
        <div className='container' id='sell-window' draggable="true">
            <div className='regular-order'>
                <div className='inputs'>
                    <fieldset>
                        <legend>Qty.</legend>
                        <input type="number" name='qty' id="qty" onChange={(e)=>setStockQuantity(e.target.value)} value={stockQuantity} /> 
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input type="number" name='price' id="price" onChange={(e)=>setStockPrice(e.target.value)} value={stockPrice} /> 
                    </fieldset>
                </div>
            </div>

            <div className='buttons'>
                <div>
                    <Link className='btn btn-danger' onClick={handleSellClick}>Sell</Link>
                    <Link className='btn btn-grey' onClick={handleCancelClick}>Cancel</Link>
                </div>
            </div>
        </div>
    );
}

export default SellActionWindow;