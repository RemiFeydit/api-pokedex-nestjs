import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box } from '@mui/material';
import HomeHeader from '../components/HomeHeader';
import InputButton from '../components/InputButton';

export default function PokemonAbilities() {
  function customReplaceAll(string, array, replacer) {
    for (let i = 0; i < array.length; i++) {
      string = string.replaceAll(array[i], replacer);
    }
    return string;
  }

  async function handleClick() {
    let pokemonAbilities = {};
    for (let i = 1; i < 2; i++) {
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
      pokemonAbilities = {
        slot: 1,
        isHidden: true,
      };
      let pokemonName = pokemonSpecies.names.filter(
        (pokemon) => pokemon.language.name === 'fr',
      )[0].name;
      console.log(`${pokemonName}`);
      console.log(pokemonRequest);
      //   try {
      //     await fetch(
      //       `/base-pokemon-abilities/pokemon/${PokemonName}/ability/Chlorophylle/`,
      //       {
      //         method: 'POST',
      //         mode: 'cors',
      //         headers: {
      //           Accept: 'application/json',
      //           'Content-Type': 'application/json',
      //         },
      //         body: JSON.stringify(baseStats), // body data type must match "Content-Type" header
      //       },
      //     );
      //   } catch (error) {
      //     alert(error);
      //   }
      // }
    }
  }
  return (
    <div>
      <HomeHeader />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xsOffset={5} xs={12}>
            <h2>Ajout Pokemon Abilities</h2>
          </Grid>
          <Grid xsOffset={5} xs={12}>
            <InputButton name="Add Pokemon Abilities" onClick={handleClick} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
