import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';

export const ViewerStyle  = makeStyles({
  main:{
    width:100,
    height:100,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'

  }
})

export const TitleStyle = makeStyles((theme)=> ({
  main:{
      margin: theme.spacing(3),
      fontSize:25,
      fontWeight:600
  }
}));

export const Viewer = () => {
  const classes = ViewerStyle();
  return <div className={classes.main}></div>
}
export const Title = ({text}) => {
  const classes = TitleStyle();
  return <Box component="div" display="flex" className={classes.main}>{text}</Box>
}
// })
// export const Viewer = styled.div`

//   width: 100vw;
//   height: 100vh;
  
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

// `;
// export const Title = styled.div`
//   width: 100%
//   height: 50px;

//   margin: 0 0 20px 0;

//   font-size: 25px;
//   font-weight: 600;
// `;