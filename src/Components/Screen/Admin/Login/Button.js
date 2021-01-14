import React, {useState} from "react";

import {
  LoginButtonViewer,
  MoveToSignupButtonViewer,
} from "./Resource/Style/StButton";

export const MoveToSignupButton = ({onClick}) => (
  <MoveToSignupButtonViewer onClick={onClick}>회원가입</MoveToSignupButtonViewer>
);
export const LoginButton = ({ onClick }) => (
  <LoginButtonViewer onClick={onClick}>로그인하기</LoginButtonViewer>
);
