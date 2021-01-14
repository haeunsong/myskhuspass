import React from 'react';

import { onCertifyPhone , CertifyPhoneButton, BackButton ,VisitorSignupButton} from './Button';
import { useInput, Input } from './Input';
import { Viewer, Title } from './Resource/Style/StMain';

// visitor/signup
// 방문자 휴대전화 번호 인증 화면(방문자 로그인)
// 학생/교직원/교수 등등
// 전화번호로 인증하면 자동으로 사용자 생성 및 인증토큰 발급
// 서버에 인증된 전화번호 저장
// 이름, 소속은 입력하면 기기에만 저장.(다음부터는 가입안해도되게)
// 체크인 시 토큰, 이름, 소속 제출
const Main = ({ setClickView }) => {
  const phoneUseInput = useInput("휴대전화 번호('-'제외 번호만 입력):");
  const certifyNumUseInput = useInput("인증번호(8자리):");
  const nameUseInput = useInput("이름:");
  const majorUseInput = useInput("학과(학부):");

  const onCertifyPhoneClick = () => {
    // 휴대폰으로 인증번호 전송
    onCertifyPhone();
  };

  return (
    <Viewer>
      <Title>방문자 회원가입</Title>
      <Input type="text" {...phoneUseInput} />
      <CertifyPhoneButton onClick={onCertifyPhoneClick} />
      <Input type="text" {...certifyNumUseInput} />
      <Input type="text" {...nameUseInput} />
      <Input type="text" {...majorUseInput} />
      <VisitorSignupButton onClick={()=>{
        alert('회원가입이 완료되었습니다. 다시 로그인해주세요.');
        setClickView('visitorSigninView');
      }} />
      <BackButton onClick={()=>setClickView('visitorSigninView')} />
    </Viewer>
  );
};

export default Main;
