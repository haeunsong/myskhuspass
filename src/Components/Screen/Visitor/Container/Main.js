import React from "react";

import Login from "../Main";
import Checkin from "../Checkin/Main";
import { getUserToken } from "../Auth/Main";

const Main = () => {

  return <>{getUserToken() ? <Checkin /> : <Login />}</>;
};

export default Main;
