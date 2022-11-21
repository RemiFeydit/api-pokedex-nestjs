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
    let pokemon = {};
    for (let i = 1; i < 906; i++) {
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
      let pkmnDescArr = pokemonSpecies.flavor_text_entries.filter(
        (lang) => lang.language.name === 'fr',
      );
      pokemon = {
        PokemonName: pokemonSpecies.names.filter(
          (pokemon) => pokemon.language.name === 'fr',
        )[0].name,
        PokemonHeight: pokemonRequest.height / 10,
        PokemonWeight: pokemonRequest.weight / 10,
        PokemonDescription:
          pkmnDescArr.length > 0
            ? pkmnDescArr[pkmnDescArr.length - 1].flavor_text
            : null,
      };
      try {
        await fetch('/pokemons', {
          method: 'POST',
          mode: 'cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(pokemon), // body data type must match "Content-Type" header
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
            <h2>Ajout Pokémon</h2>
          </Grid>
          <Grid xsOffset={5} xs={12}>
            <InputButton name="Add Pokémons" onClick={handleClick} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
