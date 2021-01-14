import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles"; // styles 기능 추가
import Button from "@material-ui/core/Button";

export const ButtonStyle = makeStyles({
  certifyEmail:{
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
    marginBottom:5,

  }

})

export const AdminSignupButtonViewer = ({onClick}) =>{
  const classes = ButtonStyle();
  return <Button type="submit"  fullWidth onClick={onClick} variant="contained" className={classes.signup}>회원가입 완료</Button>;
}
export const CertifyEmailButtonViewer = ({onClick}) =>{
  const classes = ButtonStyle();
  return <Button type="submit" onClick={onClick} variant="contained" className={classes.certifyEmail}>인증메일 전송</Button>;
}
export const BackButtonViewer = ({onClick}) =>{
  const classes = ButtonStyle();
  return <Button onClick={onClick} variant="contained" className={classes.back}>뒤로가기</Button>;
}

