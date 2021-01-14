import React from "react";
import { setUserToken } from "../../../../Auth/Token";
import { ACCESS_TOKEN } from "../Auth/Main";
import {
  CertifyPhoneButtonViewer,
  LoginButtonViewer,
  MoveToSignupButtonViewer
} from "./Resource/Style/StButton";

export const onVistiorLogin = (phone, name, major) => {
  console.log(phone, name, major);
  // 서버쪽에 토큰 물어오기
  // fetch로 서버 URL 넣어서 가져오면됨
  // 가져온 토큰을

  setUserToken(ACCESS_TOKEN);
  window.location.reload();
};
export const onCertifyPhone = () => {
  alert("핸드폰으로 인증번호를 전송하였습니다. 인증번호를 확인해주세요.");
};
export const CertifyPhoneButton = ({ onClick }) => (
  <CertifyPhoneButtonViewer onClick={onClick}>
    인증번호 전송
  </CertifyPhoneButtonViewer>
);
export const LoginButton = ({ onClick }) => (
  <LoginButtonViewer onClick={onClick}>로그인하기</LoginButtonViewer>
);

export const MoveToSignupButton = ({onClick}) => (
  <MoveToSignupButtonViewer onClick={onClick}>회원가입</MoveToSignupButtonViewer>
);