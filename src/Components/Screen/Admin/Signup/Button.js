import React from "react";
import {AdminSignupButtonViewer,CertifyEmailButtonViewer,BackButtonViewer} from './Resource/Style/StButton';

export const onSignup=(id,password)=>{
    console.log(id,password);
}

export const AdminSignupButton = ({ onClick }) => (
    <AdminSignupButtonViewer onClick={onClick}>가입하기</AdminSignupButtonViewer>
);

// 누르면 이메일로 인증코드. 누르면 전화번호로 인증번호
// 이메일로 인증링크 담아서 보냄.
export const CertifyEmailButton = ({ onClick }) => (
    <CertifyEmailButtonViewer onClick={onClick}>인증메일 전송</CertifyEmailButtonViewer>
)
export const BackButton = ({onClick}) => <BackButtonViewer onClick={onClick}>뒤로가기</BackButtonViewer>;
