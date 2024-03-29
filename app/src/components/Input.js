import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Input(props) {
    return (
        <Box
            component="form"
            sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="standard-basic"
                label={props.name}
                variant="standard"
                inputRef={props.refer}
            />
        </Box>
    );
}
