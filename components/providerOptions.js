import WalletConnectProvider from "@walletconnect/web3-provider";
import * as UAuthWeb3Modal from "@uauth/web3modal";
import UAuthSPA from "@uauth/js";

const INFURA_ID = process.env.NEXT_UAUTH_INFURA_ID;
export const uauthOptions = {
  clientID: process.env.NEXT_UAUTH_CLIENT_ID,
  redirectUri: process.env.NEXT_UAUTH_REDIRECT_URI,

  // Must include both the openid and wallet scopes.
  scope: "openid wallet",
};

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: INFURA_ID,
    },
  },
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
  "custom-walletlink": {
    display: {
      logo: "https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0",
      name: "Coinbase",
      description: "Connect to Coinbase Wallet (not Coinbase App)",
    },
    options: {
      appName: "Coinbase", // Your app name
      networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
      //networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
      chainId: 1,
    },
    package: WalletConnectProvider,
  },
};

export default providerOptions;
