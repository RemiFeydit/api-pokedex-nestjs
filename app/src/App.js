import RedirectButton from './components/RedirectButton';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import './App.css';
import HomeHeader from './components/HomeHeader';

function App() {
  return (
    <div>
      <HomeHeader />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xsOffset={5} xs={12}>
            <RedirectButton name="Pokemon" />
          </Grid>
          <Grid xsOffset={5} xs={12}>
            <RedirectButton name="Abilities" />
          </Grid>
          <Grid xsOffset={5} xs={12}>
            <RedirectButton name="Types" />
          </Grid>
          <Grid xsOffset={5} xs={12}>
            <RedirectButton name="Moves" />
          </Grid>
          <Grid xsOffset={5} xs={12}>
            <RedirectButton name="PokemonAbilities" />
          </Grid>
          <Grid xsOffset={5} xs={12}>
            <RedirectButton name="PokemonTypes" />
          </Grid>
          <Grid xsOffset={5} xs={12}>
            <RedirectButton name="PokemonMoves" />
          </Grid>
          <Grid xsOffset={5} xs={12}>
            <RedirectButton name="BaseStats" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
