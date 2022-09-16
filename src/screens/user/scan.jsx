import React from "react";
import { Button, Logo, Text } from "../../component/Util";

export default function userScan() {
  return (
    <div className="container">
      <Logo />
      <img
        src="/images/scanner.png"
        alt="gh"
        style={{
          width: "50%",
          alignSelf: "center",
        }}
      />
      <Button lable="Scan" align="center" />
    </div>
  );
}
