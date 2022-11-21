import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

export default function RedirectButton(props) {
    return (
        <Stack direction="row" spacing={16}>
            <Link
                to={`/${props.name.toLowerCase()}`}
                style={{ textDecoration: "none" }}
            >
                <Button variant="contained">{props.name}</Button>
            </Link>
        </Stack>
    );
}
