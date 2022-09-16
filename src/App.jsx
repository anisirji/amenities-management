import React, { Component } from "react";
import "./App.css";

import MakerLogin from "./screens/maker/login";
import MakerHome from "./screens/maker/home";
import MakerScan from "./screens/maker/scan";
import MakerScanResult from "./screens/maker/scanResult";
import MakerOk from "./screens/maker/scanResultOk";
import MakerNotOk from "./screens/maker/sacnResultNotOk";
import MakerNotOkNext from "./screens/maker/notOkNext";

import CheckerHome from "./screens/checker/home";
import CheckerLogin from "./screens/checker/login";
import CheckerScan from "./screens/checker/scan";
import CheckerScanResult from "./screens/checker/scanResult";
import CheckerOk from "./screens/checker/scanResultOk";
import CheckerNotOkNext from "./screens/checker/notOkNext";
import CheckerNotOk from "./screens/checker/sacnResultNotOk";

import UserScan from "./screens/user/scan";
import UserReviewRes from "./screens/user/scanRes";
import Review from "./screens/user/review";

function App() {
  return (
    <div>
      <MakerLogin />
      <MakerHome />
      <MakerScan />
      <MakerScanResult />
      <MakerOk />
      <MakerNotOk />
      <MakerNotOkNext />
      {}
      <CheckerLogin />
      <CheckerHome />
      <CheckerScan />
      <CheckerScanResult />
      <CheckerOk />
      <CheckerNotOk />
      <CheckerNotOkNext />
      {}
      <UserScan />
      <UserReviewRes />
    </div>
  );
}

export default App;
