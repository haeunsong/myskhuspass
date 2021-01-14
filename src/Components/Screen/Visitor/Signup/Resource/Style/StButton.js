import React from "react";
import styled from "styled-components";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles"; // styles 기능 추가
import Button from "@material-ui/core/Button";

const ButtonStyle = makeStyles({

  signup:{
    backgroundColor: '#8cc8e6',
    '&:hover':{
      background: '#0d71a3',
      color:'#ffffff'
    },
    border: 0,
    borderRadius: 3,
    boxShadow: '0',
    color: 'black',
    height: 40,
    width: 340,
    fontSize:14,
    padding: '0 30px',
    marginBottom:5,
  },

  back:{
    backgroundColor: '#8cc8e6',
    '&:hover':{
      background: '#0d71a3',
      color:'#ffffff'
    },
    border: 0,
    borderRadius: 3,
    boxShadow: '0',
    color: 'black',
    height: 40,
    width: 340,
    fontSize:14,
    padding: '0 30px',
  },

  certifyPhone:{
    backgroundColor: '#8cc8e6',
    '&:hover':{
      background: '#0d71a3',
      color:'#ffffff'
    },
      border: 0,
      borderRadius: 3,
      boxShadow: '0',
      color: 'black',
      height: 40,
      width: 340,
      fontSize:14,
      padding: '0',
      marginBottom:5,
  }


})


// export const LoginButtonViewer = ({onClick}) =>{
//   const classes = ButtonStyle();
//   return <Button onClick={onClick} variant="contained" className={classes.login}>로그인하기</Button>;
// }
// export const MoveToSignupButtonViewer = ({onClick}) =>{
//   const classes = ButtonStyle();
//   return <Button onClick={onClick} variant="contained" className={classes.signup}>회원가입</Button>;
// }
export const BackButtonViewer = ({onClick}) => {
  const classes = ButtonStyle();
  return <Button onClick={onClick} variant="contained" className={classes.back}>뒤로가기</Button>;
}
export const CertifyPhoneButtonViewer = ({onClick}) => {
  const classes = ButtonStyle();
  return <Button onClick={onClick} variant="contained" className={classes.certifyPhone}>인증하기</Button>;

}
export const VisitorSignupButtonViewer = ({onClick}) => {
  const classes = ButtonStyle();
  return <Button onClick={onClick} variant="contained" className={classes.signup}>회원가입 완료</Button>;

}
// export const LoginButtonViewer = styled.button`
//   width: 250px;
//   height: 40px;

//   border: 0;
//   border-radius: 2px;
//   font-size: 14px;
//   text-align: center;

//   &:hover {
//     background-color: #ffe6f1;
//   }
// `;


// export const MoveToSignupButtonViewer = styled.button`
// width: 100px;
// height: 30px;
// margin: 10px;

// border: 0;
// border-radius: 2px;
// font-size: 12px;
// text-align: center;

// &:hover {
//   background-color: #ffe6f1;
// }

// `;
// export const BackButtonViewer = styled.button`
//   width: 250px;
//   height: 40px;

//   border: 0;
//   border-radius: 2px;
//   font-size: 14px;
//   text-align: center;
//   margin: 20px 0 0 0;
// `;
