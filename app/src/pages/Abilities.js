import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box } from '@mui/material';
import HomeHeader from '../components/HomeHeader';
import InputButton from '../components/InputButton';

export default function Abilities() {
  async function handleClick() {
    let ability = {};
    for (let i = 2; i < 268; i++) {
      let abilityRequest = await fetch(`https://pokeapi.co/api/v2/ability/${i}`)
        .then((response) => response.json())
        .then((data) => data);
      let abDescArr = abilityRequest.flavor_text_entries.filter(
        (lang) => lang.language.name === 'fr',
      );
      ability = {
        AbilitiesName: abilityRequest.names.filter(
          (name) => name.language.name === 'fr',
        )[0].name,
        AbilitiesDescription: abDescArr[abDescArr.length - 1].flavor_text,
      };
      try {
        await fetch('/abilities', {
          method: 'POST',
          mode: 'cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(ability), // body data type must match "Content-Type" header
        });
      } catch (error) {
        alert(error);
      }
    }
  }
  return (
    <div>
      <HomeHeader />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xsOffset={5} xs={12}>
            <h2>Ajout Abilities</h2>
          </Grid>
          <Grid xsOffset={5} xs={12}>
            <InputButton name="Add Abilities" onClick={handleClick} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
