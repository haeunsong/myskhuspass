import React from "react";

import {Viewer,Title} from './Resource/Style/StMain';
import {Input,useInput } from './Input';
import {LoginButton,MoveToSignupButton,onVistiorLogin,onCertifyPhone,CertifyPhoneButton} from './Button';

const Main = ({ setClickView }) => {
  const phoneUseInput = useInput("휴대전화 번호('-'제외 번호만 입력):");
  const certifyNumUseInput = useInput("인증번호(8자리):");
  const nameUseInput = useInput("이름:");
  const majorUseInput = useInput("학과(학부):");

  const onCertifyPhoneClick = () => {
    // 휴대폰으로 인증번호 전송
    onCertifyPhone();
  };
  const onLoginClick = () => {
    onVistiorLogin(
      phoneUseInput.value,
      nameUseInput.value,
      majorUseInput.value
    );
  };

  // 
  return (
    <Viewer>
      <Title>방문자 로그인</Title>
      <Input type="text" {...phoneUseInput} />
      <CertifyPhoneButton onClick={onCertifyPhoneClick} />
      <Input type="text" {...certifyNumUseInput} />
      {/* <Input type="text" {...nameUseInput} />
      <Input type="text" {...majorUseInput} /> */}
      <LoginButton onClick={onLoginClick} />
      <MoveToSignupButton onClick={() => setClickView("visitorSignupView")}></MoveToSignupButton>
    </Viewer>
  );
};


export default Main;
