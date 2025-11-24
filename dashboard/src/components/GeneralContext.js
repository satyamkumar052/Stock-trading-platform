import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid)=> {},
  closeBuyWindow: ()=> {},
  openSellWindow: (uid,qty)=>{},
  closeSellWindow:()=>{},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockQty, setSelectedStockQty] = useState(0);

  const handleOpenBuyWindow = (uid)=>{
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = ()=>{
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenSellWindow = (uid,qty)=>{
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedStockQty(qty);
  };

  const handleCloseSellWindow = (uid)=>{
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
    setSelectedStockQty(0);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} availableQty={selectedStockQty} /> }
    </GeneralContext.Provider>
  );
};

export default GeneralContext;