import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box } from '@mui/material';
import HomeHeader from '../components/HomeHeader';
import InputButton from '../components/InputButton';

export default function PokemonAbilities() {
  async function handleClick() {
    const numbers = Array(905)
      .fill()
      .map((_, index) => index + 1);
    numbers.sort(() => Math.random() - 0.5);
    for (let i of numbers) {
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
      for (const element of pokemonRequest.abilities) {
        let ability = await fetch(element.ability.url)
          .then((response) => response.json())
          .then((data) => data);
        console.log(pokemonRequest);
        let abilityName = ability.names.filter(
          (name) => name.language.name === 'fr',
        )[0].name;
        let pokemonAbilities = {
          slot: element.slot,
          is_hidden: element.is_hidden,
        };
        try {
          await fetch(
            `/pokemon-ability/pokemon/${pokemonName}/ability/${abilityName}/`,
            {
              method: 'POST',
              mode: 'cors',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(pokemonAbilities), // body data type must match "Content-Type" header
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
