import React from "react";
import MakerOk from "./scanResultOk";
import { Text } from "../../component/Util";

const CheckerNotOk = () => {
  return (
    <MakerOk>
      <Text lable="comments:" my="1rem" fontWeight={"bold"} />
      <Text lable=" - Mirror dirty" my=".2rem" fontWeight={"bold"} />
      <Text lable=" - Water on Floor" my=".2rem" fontWeight={"bold"} />
    </MakerOk>
  );
};

export default CheckerNotOk;
