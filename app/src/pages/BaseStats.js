import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box } from '@mui/material';
import HomeHeader from '../components/HomeHeader';
import InputButton from '../components/InputButton';

export default function Pokemon() {
  function customReplaceAll(string, array, replacer) {
    for (let i = 0; i < array.length; i++) {
      string = string.replaceAll(array[i], replacer);
    }
    return string;
  }

  async function handleClick() {
    let baseStats = {};
    const numbers = Array(905)
      .fill()
      .map((_, index) => index + 1);
    numbers.sort(() => Math.random() - 0.5);
    for (let i of numbers) {
      let pokemonRequest = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => response.json())
        .then((data) => data);
      let pokemonSpecies = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${customReplaceAll(
          pokemonRequest.name,
          [
            '-normal',
            '-plant',
            '-altered',
            '-land',
            '-red-striped',
            '-standard',
            '-incarnate',
            '-ordinary',
            '-aria',
            '-male',
            '-shield',
            '-average',
            '-50',
            '-baile',
            '-midday',
            '-solo',
            '-red-meteor',
            '-disguised',
            '-amped',
            '-ice',
            '-full-belly',
            '-single-strike',
          ],
          '',
        )}`,
      )
        .then((response) => response.json())
        .then((data) => data);
      baseStats = {
        base_stat_hp: pokemonRequest.stats[0].base_stat,
        base_stat_attack: pokemonRequest.stats[1].base_stat,
        base_stat_defense: pokemonRequest.stats[2].base_stat,
        base_stat_spe_attack: pokemonRequest.stats[3].base_stat,
        base_stat_spe_defense: pokemonRequest.stats[4].base_stat,
        base_stat_speed: pokemonRequest.stats[5].base_stat,
      };
      try {
        await fetch(
          `/base-stat/${
            pokemonSpecies.names.filter(
              (pokemon) => pokemon.language.name === 'fr',
            )[0].name
          }`,
          {
            method: 'POST',
            mode: 'cors',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(baseStats), // body data type must match "Content-Type" header
          },
        );
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
            <h2>Ajout Base Stats to Pokemon</h2>
          </Grid>
          <Grid xsOffset={5} xs={12}>
            <InputButton name="Add Base Stats" onClick={handleClick} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
