import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

  // Render content based on subpath
    const ProjectAdmin = ({pathname}) => {
    const subpath = pathname.split('/')[2];
    switch (subpath) {
    case 'add':
      return (
        <>
          <h3 style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>Add a new project</h3>
          <Box
            display='flex'
            justifyContent="center"
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
          >
            <Stack spacing={2} direction="column" sx={{alignItems: 'center'}}>
              <TextField  id="title" label="Title" variant="outlined"/>
              <TextField id="description" label="Description" variant="outlined"/>
              <TextField id="startDate" label="Start Date" variant="outlined" type="date" InputLabelProps={{shrink: true}}/>
              <TextField id="endDate" label="End Date" variant="outlined" type="date" InputLabelProps={{shrink: true}}/>
              <Button variant="contained">Submit</Button>
            </Stack>
            </Box>
        </>
      );
    case 'edit':
      return (
        <>
          <h3 style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>Edit the existing project</h3>
          <Box
            display='flex'
            justifyContent="center"
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
          >
            <Stack spacing={2} direction="column" sx={{alignItems: 'center'}}>
              <TextField  id="title" label="Title" variant="outlined"/>
              <TextField id="description" label="Description" variant="outlined"/>
              <TextField id="startDate" label="Start Date" variant="outlined" type="date" InputLabelProps={{shrink: true}}/>
              <TextField id="endDate" label="End Date" variant="outlined" type="date" InputLabelProps={{shrink: true}}/>
              <Button variant="contained">Submit</Button>
            </Stack>
            </Box>
        </>
      );
    case 'view':
      return(
        <>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </>
      );
    default:
      return (
        <h3 style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
          Select a project action
        </h3>
      );
  }
};
export default ProjectAdmin;