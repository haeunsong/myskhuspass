import React,{useState} from 'react';
import GlobalStyle from '../Share/StConstant';
import VisitorSignin from '../Visitor/Login/Main';
import VisitorSignup from '../Visitor/Signup/Main';

const Main = () => {
  const [clickView,setClickView] = useState('visitorSigninView');

  return (
    <>
    <GlobalStyle />
    {clickView === 'visitorSigninView' && <VisitorSignin setClickView={setClickView} />}
    {clickView === 'visitorSignupView' && <VisitorSignup setClickView={setClickView} />}
    </>
  )
}

export default Main;