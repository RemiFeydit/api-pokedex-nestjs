import Input from "../components/Input";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/material";
import HomeHeader from "../components/HomeHeader";

export default function PokemonMoves() {
    return (
        <div>
            <HomeHeader />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xsOffset={5} xs={12}>
                        <h2>Ajout de PokemonMoves </h2>
                    </Grid>
                    <Grid xsOffset={5} xs={12}>
                        <Input name="Move Name" />
                    </Grid>
                    <Grid xsOffset={5} xs={12}>
                        <Input name="Type" />
                    </Grid>
                    <Grid xsOffset={5} xs={12}>
                        <Input name="MovePower" />
                    </Grid>
                    <Grid xsOffset={5} xs={12}>
                        <Input name="MovePP" />
                    </Grid>
                    <Grid xsOffset={5} xs={12}>
                        <Input name="MoveAccuracy" />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
