import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box } from '@mui/material';
import HomeHeader from '../components/HomeHeader';
import InputButton from '../components/InputButton';
import { Types } from '../models/Types';

export default function PokemonTypes() {
  async function handleClick() {
    for (let i = 1; i < 906; i++) {
      let pokemonRequest = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => response.json())
        .then((data) => data);
      let pokemonSpecies = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${i}`,
      )
        .then((response) => response.json())
        .then((data) => data);
      let pokemonName = pokemonSpecies.names.filter(
        (pokemon) => pokemon.language.name === 'fr',
      )[0].name;
      for (const element of pokemonRequest.types) {
        let typeName = Types[element.type.name];
        let pokemonTypes = {
          Slot: element.slot,
        };
        try {
          await fetch(
            `/pokemon-types/pokemon/${pokemonName}/type/${typeName}/`,
            {
              method: 'POST',
              mode: 'cors',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(pokemonTypes), // body data type must match "Content-Type" header
            },
          );
        } catch (error) {
          alert(error);
        }
      }
    }
  }
  return (
    <div>
      <HomeHeader />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xsOffset={5} xs={12}>
            <h2>Ajout Pokemon Types</h2>
          </Grid>
          <Grid xsOffset={5} xs={12}>
            <InputButton name="Add Pokemon Types" onClick={handleClick} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
