import React from "react";
import styled from "styled-components";
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";


export const InputStyle = makeStyles ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        display: "flex",
        flexWrap: "wrap",
        background: '#lightBlue',
        border: 0,
        borderRadius: 3,
        boxShadow: '0',
        color: 'black',
        height: 60,
        width: 400,
        fontSize: 14,
        padding: '0 30px',
        margin: 0,
    },

})

export const InputViewer = ({ onChange, placeholder, type, value }) => {
    const classes = InputStyle();
    return (
        <form className={classes.container}>
            <TextField
                defaultValue={value}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                className={classes.textField}
                variant="outlined"
            />
        </form>

    )
}
// export const InputViewer=styled.input`

//     width: 250px;
//     height: 40px;
//     border: 0;
//     background-color: lightBlue;
//     border-radius: 2px;
//     font-size: 14px;
//     margin: 0 0 1px 0;
//     padding: 0 15px 0 15px;
//     text-align: center;
// `;

