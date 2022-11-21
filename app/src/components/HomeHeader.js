import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomeHeader() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xsOffset={5} xs={12}>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <h1>sql-query</h1>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
