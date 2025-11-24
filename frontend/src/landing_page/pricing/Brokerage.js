import React from "react";

function Brokerage() {
  return (
    <div className="container mb-5 pb-5">
      <div className="row mt-5 ">
        <div className="col-lg-8 px-5">
          <h1 className="text-center fs-4 mb-4" style={{color:"#689CDB"}}>Brokerage calculator</h1>
          <ul className="text-muted lh-lg ">
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged 240 per executed order instead of 220 per executed order.
            </li>
          </ul>
        </div>

        <div className="col-lg-4 px-5" style={{color:"#689CDB"}}>
          <h1 className="text-center fs-4 mb-4">List of charges</h1>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
