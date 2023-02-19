import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { initializeConnector } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { MetaMask } from "@web3-react/metamask";
import { WalletConnect } from "@web3-react/walletconnect";
import UAuth from "@uauth/js";
import { UAuthConnector } from "@uauth/web3-react";

const supportedChainIds = [1];
export const injected = new InjectedConnector({
  supportedChainIds: supportedChainIds,
});

export const walletconnect = new WalletConnectConnector({
  supportedChainIds: supportedChainIds,
  infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
  qrCode: true,
});

export const uauth = new UAuthConnector({
  clientID: process.env.NEXT_PUBLIC_UAUTH_CLIENT_ID,
  redirectUri: process.env.NEXT_PUBLIC_UAUTH_REDIRECT_URI,
  scope: "openid wallet",
  connectors: { injected, walletconnect },
});

const connectors = {
  UAuth: uauth,
  Injected: injected,
  //WalletConnect: walletConnect,
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Web3ReactProvider connectors={connectors}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </>
  );
}
