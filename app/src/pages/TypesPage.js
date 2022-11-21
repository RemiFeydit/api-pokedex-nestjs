import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box } from '@mui/material';
import HomeHeader from '../components/HomeHeader';
import InputButton from '../components/InputButton';
import { Types } from '../models/Types';

export default function TypesPage() {
  async function handleClick() {
    let typesArr = Object.values(Types);
    for (let i = 0; i < typesArr.length; i++) {
      console.log(typesArr[i]);
      try {
        await fetch('/types', {
          method: 'POST',
          mode: 'cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ TypeName: typesArr[i] }), // body data type must match "Content-Type" header
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
            <h2>Ajout Types</h2>
          </Grid>
          <Grid xsOffset={5} xs={12}>
            <InputButton name="Add Types" onClick={handleClick} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
