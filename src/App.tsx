import React from 'react';
import './App.css';
import SmartWallet from "./SmartWallet";
import {Goerli} from "@thirdweb-dev/chains";
import {coinbaseWallet, metamaskWallet, smartWallet, walletConnectV1, ThirdwebProvider} from "@thirdweb-dev/react";

function App() {
    const smartWalletConfig = smartWallet({
        factoryAddress: '0x1EF72717d258445E04Dbad3056B48ef792F4217b',
        gasless: true,
        thirdwebApiKey: "38e74e5cc02a453338528a7cecb8141686470640a753df15d708a36a5695d62dc2f6f90b366d8ff7dad37885512482602f630e8a94489fa445956b2f83a6ab4a",
        personalWallets: [metamaskWallet(), coinbaseWallet(), walletConnectV1()],
    });

  return (
    <div className="App">
      <header className="App-header">
          <ThirdwebProvider
              activeChain={Goerli}
              supportedWallets={[smartWalletConfig]}
          >
        <SmartWallet />
          </ThirdwebProvider>
      </header>
    </div>
  );
}

export default App;
