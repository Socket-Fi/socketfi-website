import { useState, lazy, Suspense, useEffect } from "react";

import { isConnected, getPublicKey, getNetwork } from "@stellar/freighter-api";

import Home from "./pages/home/Home";
import Header from "./common/Header";
import ContractDapp from "./pages/contract-dapp/ContractDapp";
import Playground from "./pages/dapp-playground/Playground";
import Wallet from "./pages/socketfi-wallet/Wallet";
import DappComponents from "./pages/dapp-components/DappComponents";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NotFound from "./not-found/NotFound";
import "./App.css";
import axios from "axios";

const STAT_URL = "https://history.socket.fi";

function App() {
  const [userkey, setUserKey] = useState("");
  const [network, setNetwork] = useState("");
  const [appStats, setAppStats] = useState(null);

  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [connecting, setConnecting] = useState(false);
  useEffect(() => {
    async function fetchConnectedUser() {
      const connected = await isConnected();
      const publicKey = await getPublicKey();
      const nt = await getNetwork();
      setUserKey(() => publicKey);
      setNetwork(() => nt);
      setIsWalletInstalled(() => connected);
    }
    fetchConnectedUser();
  }, [userkey, network, isConnected, connecting]);

  console.log("stats are", appStats);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await axios.get(`${STAT_URL}/update-visits`, {
          withCredentials: true,
        });

        // const res2 = await axios.post(
        //   "http://localhost:3000/update-stats",
        //   { users: 1 },
        //   {
        //     withCredentials: true,
        //   }
        // );

        // await axios.post("http://localhost:3000/user-tx/0x12345678920abcdef", {
        //   transactionId: "tx12345",
        //   status: "completed",
        //   type: "deposit",
        //   recipient: "0xabcdef9876543210",
        // });

        // const resSave = await axios.get(
        //   "http://localhost:3000/user-tx/0x12345678920abcdef"
        // );

        console.log("visit data", res.data);

        setAppStats(() => res.data);
        // console.log("data", res2.data);
      } catch (error) {
        console.error("Error fetching Twitter auth data:", error);
      }
    }
    fetchStats();
  }, []);

  return (
    <div className="bg-gray-50">
      <Router>
        <Header
          setNetwork={setNetwork}
          setUserKey={setUserKey}
          userKey={userkey}
          isWalletInstalled={isWalletInstalled}
          setConnecting={setConnecting}
          connecting={connecting}
        />
        <Routes>
          {/* <Route path="/" element={<Home />} index /> */}
          <Route
            path="/"
            element={
              <Home
                appStats={appStats}
                userKey={userkey}
                setNetwork={setNetwork}
                setUserKey={setUserKey}
                isWalletInstalled={isWalletInstalled}
                setConnecting={setConnecting}
                connecting={connecting}
              />
            }
          />
          <Route path="/playground" element={<Wallet />} />

          {/* <Route path="/sorobuild-ui" element={<DappComponents />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
