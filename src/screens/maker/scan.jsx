import React from "react";
import { Button, Logo, Text } from "../../component/Util";

export default function makerScan() {
  return (
    <div className="container">
      <Logo />
      <div className="row">
        <Text lable="Aminities management" color="blue" fontWeight={"bold"} />
        <Text lable="13/09/2022" mx="10px" />
        <Text lable="14:25" />
      </div>
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
