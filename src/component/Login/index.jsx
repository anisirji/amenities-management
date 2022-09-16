import React from "react";
import "./style.css";
import { Button, Input, Text, Logo, link } from "../Util";

export default () => {
  return (
    <div className="container">
      <Logo />
      <Text
        lable="Amenities management"
        color="blue"
        fontWeight="bold"
        align="inherit"
      />
      <Input lable="User Id" />
      <Input type="password" lable="Password" />
      <div style={{ alignSelf: "center" }}>
        <Button lable="Login" link={link} />
      </div>
    </div>
  );
};
