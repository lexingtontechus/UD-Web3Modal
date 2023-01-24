import React, { useEffect } from "react";
//import { web3modal } from "./udmodal";
import Web3Modal from "web3modal";
const UD = () => {
  const { connect, disconnect, isConnected, isLoading, address, error, user } =
    new Web3Modal();

  const handleConnect = async () => {
    await connect();
  };

  const handleLogout = () => {
    disconnect();
  };

  useEffect(() => {
    if (error) {
      alert(String(error));
    }
  }, [error]);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isConnected) {
    return (
      <>
        <div>Connected to {address}</div>
        <button onClick={handleLogout}>Logout</button>
      </>
    );
  }

  return <button onClick={handleConnect}>Connect</button>;
};

export default UD;
