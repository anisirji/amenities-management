import React from "react";
import { Button, Logo, Text } from "../../component/Util";

export default function makerScanResult() {
  return (
    <div className="container">
      <Logo />
      <div className="row">
        <Text lable="Aminities management" color="blue" fontWeight={"bold"} />
        <Text lable="13/09/2022" mx="10px" />
        <Text lable="14:25" />
      </div>
      <Text lable={"Amenity ID:"} />
      <Text lable={"Amenity Type:"} />
      <Text lable={"Address:"} mx="20px" />
      <Text lable={"Location:"} mx="20px" />
      <Text lable={"Area:"} mx="20px" />
      <Text lable={"Zone:"} mx="20px" />
      <div
        className="row"
        style={{ marginTop: "40px", justifyContent: "space-around" }}
      >
        <Button lable="Ok" width="90px" />
        <Button lable="Not Ok" width={"90px"} />
      </div>
    </div>
  );
}
