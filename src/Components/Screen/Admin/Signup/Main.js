import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AdminSignupButton,
  CertifyEmailButton,
  BackButton
} from "./Button";
import { useInput, Input } from "./Input";
import { Viewer, Title } from "./Resource/Style/StMain";
// admin/signup
const Main = ({ setClickView }) => {
  const emailUseInput = useInput("학내메일로 가입(***@office.skhu.ac.kr):");
  const nameUseInput = useInput("이름:");
  const majorUseInput = useInput("학과(학부):");
  const userIdUseInput = useInput("사용할 ID 입력:");
  const userPwUseInput = useInput("사용할 PW 입력:");
  const checkUserPwUseInput = useInput("PW 확인:");

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      // stringify() : 객체 => JSON문자열로 변환
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: emailUseInput.value,
        name: nameUseInput.value,
        major: majorUseInput.value,
        userid: userIdUseInput.value,
        userpw: userPwUseInput.value
      })
    };
    fetch('https://skhuspass.sleepy-owl.com/user/adminsignup', requestOptions)
    .then((resp) => {
      if (resp.ok) console.log("OK");
      else console.log("ERROR!!!")
    })
    .then((resp) => resp.json())
  },[]);

  //   /user/adminsignup 
  const onCertifyEmail = async (email, userName, major, userId, userPw) => {
    alert("이메일로 인증링크를 전송하였습니다. 이메일을 확인해주세요.");


  }
  const onAdminSignup = () => {
    alert('회원가입이 완료되었습니다. 다시 로그인해주세요.');

  }
  const onCertifyEmailClick = () => {
    // 이메일로 인증링크 보냄. 
    onCertifyEmail();
  };
  const onAdminSignupClick = () => {
    onAdminSignup(emailUseInput.value, nameUseInput.value, majorUseInput.value,
      userIdUseInput.value, userPwUseInput.value);
  }

  // useInput이 반환하는 것: placeholder,value,onChange
  // 학내메일로 인증 후 별도의 ID,비번으로 가입.
  // 기기에 ID,비번 저장해서 두번째부터는 바로 로그인.
  return (
    <>
      <Viewer>
        <Title>건물 관리자 회원가입</Title>
        <Input type="email" {...emailUseInput} />
        <CertifyEmailButton onClick={onCertifyEmailClick} />
        <Input type="text" {...nameUseInput} />
        <Input type="text" {...majorUseInput} />
        <Input type="text" {...userIdUseInput} />
        <Input type="password" {...userPwUseInput} />
        <Input type="password" {...checkUserPwUseInput} />

        <Link to="/admin/login" style={{ textDecoration: 'none', display: 'grid' }}>
          <AdminSignupButton onClick={onAdminSignupClick} />
          <BackButton />
        </Link>
      </Viewer>
    </>
  );
};

export default Main;
