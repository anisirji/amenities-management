import React from "react";
import { Button, Logo, Text } from "../../component/Util";

export default function makerHome() {
  return (
    <div className="container">
      <Logo />
      <Text color="blue" fontWeight="bold" lable="Amenities Management" />
      <Text lable="Welcome Manish Kumar" my="20px" />
      <Button lable="Scan" align="center" />
    </div>
  );
}
