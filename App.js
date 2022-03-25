//modules
import React, { useState } from "react";
//import { MoralisProvider } from "react-moralis";
//components
import AppBase from "./Frontend/Components/app";

//Navigation stack definition
function App() {
  const appId = "kZdlguzNd3UOl1iB1Xk47rfwVOELotXvUGBUgW1j";
  const serverUrl = "https://0vjgn9swiqkx.usemoralis.com:2053/server";
  return (
    //<MoralisProvider appId={appId} serverUrl={serverUrl}>
    <AppBase />
    //</MoralisProvider>
  );
}

export default App;
