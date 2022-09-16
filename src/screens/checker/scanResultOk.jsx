import React from "react";
import { Button, Logo, Text } from "../../component/Util";

export default function CheckerOk({ children }) {
  return (
    <div className="container">
      <Logo />
      <div className="row">
        <Text lable="Aminities management" color="blue" fontWeight={"bold"} />
        <Text lable="13/09/2022" mx="10px" />
        <Text lable="14:25" />
      </div>
      <Text lable={"Amenity ID:"} />
      <Text lable={"Address:"} />
      <div style={{ width: "400px", marginTop: "10px" }}>
        <Text
          fontWeight={"bold"}
          lable={`Activity compleated by Manish Kumar for the above amenity at 13/09/2022 14:25 hours`}
        />
      </div>
      {children || ""}
      <Button lable="New Scan" align="flex-end" />
    </div>
  );
}
