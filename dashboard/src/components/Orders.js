import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


function Orders() {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/allOrders").then((res)=>{
            setAllOrders(res.data);
        });
    });

    return (
        <div className='orders'>

            <h3 className='title'>Orders ({allOrders.length})</h3>
            <div className='order-table'>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Qty.</th>
                        <th>Price</th>
                        <th>Mode</th>
                    </tr>

                    {allOrders.map((stock,index)=>{
                            return(
                                <tr key={index} className='item'>
                                    <td>{stock.name}</td>
                                    <td>{stock.qty}</td>
                                    <td>{stock.price}</td>
                                    <td>{stock.mode}</td>
                                </tr>
                            )
                        })}

                </table>
            </div>
            {
                allOrders.length>0 ? <div></div> : <div className='no-orders'><p>You haven't placed an orders today</p><Link to="/" className='btn btn-primary' >Get Started</Link></div>
                
            }
            
        </div>
    );
}

export default Orders;