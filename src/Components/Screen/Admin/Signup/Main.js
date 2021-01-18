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

  // useEffect에서 api 호출하면 회원가입 화면이 출력될 때 
  // 바로 빈 값인 상태로 백엔드로 전송된다. => 이 후 다시 전송할 방법이 없음.
  // useEffect에 있는 호출지우고 onAdminSignupClick에 추가하자. 
  // 이 때 여기서 완료 메세지를 성공 콜백에 출력하도록!
  // callback, handler 함수들은 useCallback 함수들 사용 권장.

  //  회원가입 api =>  /user/adminsignup 
  const onCertifyEmail = async (email, userName, major, userId, userPw) => {
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
      if (resp.ok) alert("이메일로 인증링크를 전송하였습니다. 이메일을 확인해주세요.");
      else alert("ERROR!!!");
    })
    .then((resp) => resp.json())
    


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
      {/* <Viewer> */}
        <Title text="건물 관리자 회원가입" />
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
      {/* </Viewer> */}
    </>
  );
};

export default Main;
