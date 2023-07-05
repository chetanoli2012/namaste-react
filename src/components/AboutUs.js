import React from "react";

import User from "./User";
import UserClass from "./UserClass";

const AboutUs = () => {
  return (
    <div>
      <h1>About </h1>
      <h2>This is Namaste React Web series</h2>
      {/* <User name={"Chetan - functional Comp"} /> */}
      <UserClass name={"Chetan - class Comp"} />
    </div>
  );
};

export default AboutUs;
