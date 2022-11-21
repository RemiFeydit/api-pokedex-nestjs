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
    for (let i = 905; i > 0; i--) {
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
        BaseStatsHP: pokemonRequest.stats[0].base_stat,
        BaseStatsAttack: pokemonRequest.stats[1].base_stat,
        BaseStatsDefense: pokemonRequest.stats[2].base_stat,
        BaseStatsSpeAttack: pokemonRequest.stats[3].base_stat,
        BaseStatsSpeDefense: pokemonRequest.stats[4].base_stat,
        BaseStatsSpeed: pokemonRequest.stats[5].base_stat,
      };
      try {
        await fetch(
          `/base-stats/${
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
