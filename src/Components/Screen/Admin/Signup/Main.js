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
  const emailAddrInput = useInput("학내메일로 가입(***@office.skhu.ac.kr):");
  const nameInput = useInput("이름:");
  const passwordInput = useInput("사용할 PW 입력:");
  const checkPasswordInput = useInput("PW 확인:");

  useEffect(() => {
    
  },[]);

  const onAdminSignup = () => {
    alert('회원가입 절차가 거의 끝났습니다. 입력하신 이메일 주소로 인증 메일을 보내 드렸으니, 확인 후 인증 절차를 진행하여 가입을 완료하세요.');

  }

  const onAdminSignupClick = async () => {
    try{
      let result = await fetch('/user/adminsignup',{
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: emailAddrInput.value,
          name: nameInput.value,
          password: passwordInput.value,
          passwordCheck: checkPasswordInput.value
        })
      })
      if(result.ok){
        onAdminSignup();
      }else{
        let errorMsg = await result.json();
        alert(`회원가입 중 오류가 발생했습니다: ${errorMsg.error}`)
      }
    }catch(err){

    }
      
    
  }

  // useInput이 반환하는 것: placeholder,value,onChange
  // 학내메일로 인증 후 별도의 ID,비번으로 가입.
  // 기기에 ID,비번 저장해서 두번째부터는 바로 로그인.
  return (
    <>
      {/* <Viewer> */}
        <Title text="건물 관리자 회원가입" />
        <Input type="email" {...emailAddrInput} />
        {/* <CertifyEmailButton onClick={onCertifyEmailClick} /> */}
        <Input type="text" {...nameInput} />
        <Input type="password" {...passwordInput} />
        <Input type="password" {...checkPasswordInput} />
        <Link to="/admin/login" style={{ textDecoration: 'none', display: 'grid' }}>
          <AdminSignupButton onClick={onAdminSignupClick} />
          <BackButton />
        </Link>
      {/* </Viewer> */}
    </>
  );
};

export default Main;
