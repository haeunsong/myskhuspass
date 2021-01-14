import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {authService} from "../../../../fbase";
import { MoveToSignupButton, LoginButton } from "./Button";
import { useInput, Input } from "./Input";
import { Viewer, Title } from "./Resource/Style/StMain";

const Main = ({ setClickView }) => {
  const emailUseInput = useInput("학내메일로 로그인(@office.skhu.ac.kr):");
  const passwordUseInput = useInput("비밀번호를 입력하세요:");
  const [error,setError] = useState("");

  const onAdminLogin =  async(email, password) => {
    // e.preventDefault();
    try {
      let data;
      data = await authService.signInWithEmailAndPassword(email, password);
      console.log(data);
    } catch (error) {
      setError(error.message);
      alert(error);
    }
  };
  const onAdminLoginClick = () => {
    console.log(emailUseInput.value, passwordUseInput.value);
    onAdminLogin(emailUseInput.value, passwordUseInput.value);
  };

  // useInput이 반환하는 것: placeholder,value,onChange
  return (
    <Viewer>
      <Title>건물 관리자 로그인</Title>
        <Input type="text" name="email" required value={emailUseInput.value} {...emailUseInput} />
        <Input type="password" name="password" required value={passwordUseInput.value} {...passwordUseInput} />
        <LoginButton onClick={onAdminLoginClick}/>

      <Link to="/admin/signup" style={{textDecoration:'none'}}>
      <MoveToSignupButton></MoveToSignupButton>
      </Link>    

    </Viewer>
  );
};

export default Main;