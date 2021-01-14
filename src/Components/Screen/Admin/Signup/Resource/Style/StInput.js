import React from "react";
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
    },

})
export const InputViewer = ({ onChange, placeholder, type, value,errmsg }) => {
    const classes = InputStyle();
    return (
        <form className={classes.container}>
            <TextField
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                className={classes.textField}
                variant="outlined"
                autoFocus
            />
        </form>

    )
}