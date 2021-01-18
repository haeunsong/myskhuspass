import React, {useState} from "react";

import {
  LoginButtonViewer,
  MoveToSignupButtonViewer,
} from "./Resource/Style/StButton";

export const MoveToSignupButton = ({onClick}) => (
  <MoveToSignupButtonViewer onClick={onClick} />
);
export const LoginButton = ({ onClick }) => (
  <LoginButtonViewer onClick={onClick} />
);
