import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useState, useEffect } from "react";
import * as UAuthWeb3Modal from "@uauth/web3modal";
import UAuthSPA from "@uauth/js";
import { Button, css } from "@nextui-org/react";

const INFURA_ID = process.env.NEXT_PUBLIC_UAUTH_INFURA_ID;

// These options are used to construct the UAuthSPA instance.
export const uauthOptions = {
  clientID: process.env.NEXT_PUBLIC_UAUTH_CLIENT_ID,
  redirectUri: process.env.NEXT_PUBLIC_UAUTH_REDIRECT_URI,
  // Must include both the openid and wallet scopes.
  scope: "openid wallet email:optional",
};

export default function Modal(props) {
  const [web3Modal, setWeb3Modal] = useState(null);
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();

  useEffect(() => {
    // initiate web3modal
    const providerOptions = {
      "custom-uauth": {
        // The UI Assets
        display: UAuthWeb3Modal.display,
        // The Connector
        connector: UAuthWeb3Modal.connector,
        // The SPA libary
        package: UAuthSPA,
        // The SPA libary options
        options: uauthOptions,
      },

      // For full functionality we include the walletconnect provider as well.
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: process.env.NEXT_PUBLIC_UAUTH_INFURA_ID,
        },
      },

      // Include any other web3modal providers here
    };

    const newWeb3Modal = new Web3Modal({
      cacheProvider: true, // very important
      network: "mainnet",
      providerOptions,
    });

    setWeb3Modal(newWeb3Modal);
  }, []);

  async function connectWallet() {
    const provider = await web3Modal.connect();
  }

  return <Button onClick={connectWallet}>CONNECT</Button>;
}
