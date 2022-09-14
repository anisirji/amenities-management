import React from "react";
import { Button, Input } from "../Util";

export default () => {
  return (
    <div className="container">
      <img src="/images/logo.png" alt="" srcset="" />
      <h1 className="heading">Amenities management</h1>
      <Input lable="User Id" />
      <Input type="password" lable="Password" />
      <Button lable="Login" />
    </div>
  );
};
