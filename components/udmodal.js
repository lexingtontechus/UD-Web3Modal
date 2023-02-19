import {useState} from "react"
import * as UAuthWeb3Modal from "@uauth/web3modal";
import UAuthSPA from "@uauth/js";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

const INFURA_ID = process.env.NEXT_PUBLIC_UAUTH_INFURA_ID;

// These options are used to construct the UAuthSPA instance.
export const uauthOptions = {
  clientID: process.env.NEXT_PUBLIC_UAUTH_CLIENT_ID,
  redirectUri: process.env.NEXT_PUBLIC_UAUTH_REDIRECT_URI,
  // Must include both the openid and wallet scopes.
  scope: "openid wallet email:optional",
};

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

//const web3modal = new Web3Modal({ providerOptions });
const [web3Modal, setWeb3Modal] = useState(null)

useEffect(() => {
    // connect automatically and without a popup if user is already connected
    if(web3Modal && web3Modal.cachedProvider){
      connectWallet()
    }
  }, [web3Modal])

//useEffect(() => {  Web3Modal();}, [providerOptions]);

// Register the web3modal so the connector has access to it.
UAuthWeb3Modal.registerWeb3Modal(Web3Modal);
//UAuthWeb3Modal.registerWeb3Modal({ providerOptions });

export default web3modal;
