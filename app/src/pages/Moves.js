import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box } from '@mui/material';
import HomeHeader from '../components/HomeHeader';
import InputButton from '../components/InputButton';
import { MoveCategory } from '../models/MoveCategory';
import { Types } from '../models/Types';

export default function Moves() {
  async function handleClick() {
    let move = {};
    for (let i = 1; i < 826; i++) {
      let moveRequest = await fetch(`https://pokeapi.co/api/v2/move/${i}`)
        .then((response) => response.json())
        .then((data) => data);
      let moveDescArr = moveRequest.flavor_text_entries.filter(
        (lang) => lang.language.name === 'fr',
      );
      move = {
        move_name: moveRequest.names.filter(
          (pokemon) => pokemon.language.name === 'fr',
        )[0].name,
        move_category: MoveCategory[moveRequest.damage_class.name],
        move_power: moveRequest.power,
        move_pp: moveRequest.pp,
        move_accuracy: moveRequest.accuracy,
        move_description: moveDescArr[moveDescArr.length - 1].flavor_text,
      };
      console.log(move.move_name);
      if (
        ['Lutte', 'Canon Dynamax', 'Gribouille', 'Laser Infinimax'].includes(
          move.move_name,
        ) ||
        (move.move_pp > 1 && !move.move_name.endsWith('omax'))
      ) {
        try {
          await fetch(`/move/${Types[moveRequest.type.name]}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(move), // body data type must match "Content-Type" header
          });
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
            <h2>Ajout Moves</h2>
          </Grid>
          <Grid xsOffset={5} xs={12}>
            <InputButton name="Add Moves" onClick={handleClick} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
