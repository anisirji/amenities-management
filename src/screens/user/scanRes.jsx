import React from "react";
import { Text, Button, Logo } from "../../component/Util";

const UserReviewRes = () => {
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
          lable={`Thank You for your feedback and bringing it to our attention. We shall attend to the matter immediatly`}
        />
      </div>
      <Text lable="comments:" my="1rem" fontWeight={"bold"} />
      <Text lable=" - No water" my=".2rem" fontWeight={"bold"} />
      <Text lable=" - No power" my=".2rem" fontWeight={"bold"} />
      <Button lable="New Scan" align="flex-end" />
    </div>
  );
};

export default UserReviewRes;
