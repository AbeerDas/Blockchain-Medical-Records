import React from "react";
import "./navbar.css";
import Logo from "../../assets/medical-record-icon-3599d4.webp"

import { loadAccount, loadProvider } from "../../store/interactions";
import { useDispatch, useSelector } from "react-redux";
import Blockies from "react-blockies";
import config from "../../config.json";
import { useEffect } from 'react'


const Navbar = () => {

    const dispatch = useDispatch();
    const provider = useSelector((state) => state.providerReducer?.connection);
    const account = useSelector((state) => state.providerReducer?.account);
    const balance = useSelector((state) => state.providerReducer?.balance);
    const chainId = useSelector((state) => state.providerReducer?.chainId);

    const connectHandler = async () => {
        try {
            const provider = loadProvider(dispatch); // Ensure loadProvider is called correctly
            // console.log("Provider from connectHandler:", provider);
    
            // Make sure provider is not undefined before calling loadAccount
            if (provider) {
                await loadAccount(provider, dispatch);
                console.log("This is provider: ", (account))
            } else {
                console.error("Provider is undefined, cannot load account.");
            }
        } catch (error) {
            console.error("Error connecting:", error);
        }
    };

    const networkHandler = async (e) => {
        if (!window.ethereum) {
            console.error("MetaMask is not installed");
            return;
        }

        try {
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [
                    {
                        chainId: e.target.value,
                    },
                ],
            });
        } catch (error) {
            console.error("Error switching network:", error);
        }
    };

  return (
    <div className="Navbar">
          <div className="nav__name">
            <img src={Logo} width="40" height="40"/>
          <h2>Medical Records</h2>
          </div>
          <div className="nav__networkSelector">
        <select
          name="network"
          id="network"
          onChange={networkHandler}
        
        >
       <option value="0">Select Network</option>
          <option value="0xAA36A7">Sepolia</option>
        </select>
        </div>

        <div className="nav__balance">
        {balance ? (
          <p className="nav__myBalance">
            <small>My Balance : </small>
            {Number(balance).toFixed(4)}
          </p>
        ) : (
          <p className="nav__myBalance">
            <small>My Balance : </small>
            0ETH
          </p>
        )}
        {account ? (
          <a className="nav__myAccount" href="#">
            {account.slice(0, 5) + "...." + account.slice(38, 42)}
            <Blockies
              seed={account}
              size={10}
              scale={3}
              color="#2187D0"
              bgColor="#F1F2F9"
              spotColor="#767F92"
              className="identicon"
            />
          </a>
        ) : (
          <button className="nav__balance-box" onClick={connectHandler}>
            Connect
          </button>
        )}
        </div>
          </div>
  )
}

export default Navbar
