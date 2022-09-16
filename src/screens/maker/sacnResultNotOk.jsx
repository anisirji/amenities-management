import React from "react";
import MakerOk from "./scanResultOk";
import { Text } from "../../component/Util";

const MakerNotOk = () => {
  return (
    <MakerOk>
      <Text lable="comments:" my="1rem" fontWeight={"bold"} />
      <Text lable=" - No water" my=".2rem" fontWeight={"bold"} />
      <Text lable=" - No power" my=".2rem" fontWeight={"bold"} />
    </MakerOk>
  );
};

export default MakerNotOk;
