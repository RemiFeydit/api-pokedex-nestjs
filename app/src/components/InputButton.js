import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function InputButton(props) {
    return (
        <Stack direction="row" spacing={16}>
            <Button variant="contained" onClick={props.onClick}>
                {props.name}
            </Button>
        </Stack>
    );
}
