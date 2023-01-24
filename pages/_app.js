import React from "react";
import ReactDOM from "react-dom";

import UAuthSPA from "@uauth/js";
import * as UAuthWeb3Modal from "@uauth/web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";


const uauthOptions = {
  clientID: process.env.NEXT_UAUTH_CLIENT_ID,
  redirectUri: process.env.NEXT_UAUTH_REDIRECT_URI,
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
      infuraId: process.env.NEXT_UAUTH_INFURA_ID,
    },
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      {/*<Web3ModalProvider
        cacheProvider={true}
        providerOptions={providerOptions}
        onNewWeb3Modal={UAuthWeb3Modal.registerWeb3Modal}
      >*/}
      <Component {...pageProps} />
      {/*</Web3ModalProvider>*/}
    </>
  );
}
