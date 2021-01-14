import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import styled from "styled-components";

// export const ViewerStyle = makeStyles({
//   viewer:{
//     width: '100vw',
//     height: '100vh',
//     display:'flex',
//     flexDirection:'column',
//     justifyContent:'center',
//     alignItems:'center',

//   }

// }) 

// export const Viewer = () => {
//   const classes = ViewerStyle();
//   return <Box className={classes.viewer}></Box>
// }
export const Viewer = styled.div`

  width: 100vw;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
export const Title = styled.div`
  width: 100%
  height: 50px;

  margin: 0 0 20px 0;

  font-size: 25px;
  font-weight: 600;
`;

