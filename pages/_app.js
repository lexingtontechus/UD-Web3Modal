import React, { useEffect } from "react";

import UAuthSPA from "@uauth/js";
import * as UAuthWeb3Modal from "@uauth/web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

const uauthOptions = {
  clientID: process.env.NEXT_PUBLIC_UAUTH_CLIENT_ID,
  redirectUri: process.env.NEXT_PUBLIC_UAUTH_REDIRECT_URI,
  scope: "openid wallet",
};

const providerOptions = {
  "custom-uauth": {
    display: UAuthWeb3Modal.display,
    connector: UAuthWeb3Modal.connector,
    package: UAuthSPA,
    options: uauthOptions,
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: process.env.NEXT_PUBLIC_UAUTH_INFURA_ID,
    },
  },
};

//const web3modal = new Web3Modal({ providerOptions });
//const web3modal = new Web3Modal({ providerOptions });
//useEffect(() => { Web3Modal();}, [providerOptions]);

// Register the web3modal so the connector has access to it.
//UAuthWeb3Modal.registerWeb3Modal(web3Modal);
//UAuthWeb3Modal.registerWeb3Modal({ providerOptions });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
