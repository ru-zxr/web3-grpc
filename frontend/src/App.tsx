// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DepositReq, DepositRes } from "./deposit_pb";
import { DepositServiceClient } from "./deposit_grpc_web_pb";
// import { HelloRequest, RepeatHelloRequest, HelloReply } from "./helloworld_pb";
// import { GreeterClient } from "./helloworld_grpc_web_pb";

function App() {
  const client = new DepositServiceClient("http://localhost:8080", null, null);

  const depositReq = new DepositReq();
  depositReq.setAddress("mock address");
  depositReq.setAmount("520");
  client.deposit(depositReq, {}, (err, response) => {
    if (err) return console.log(err);
    console.log(response);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
