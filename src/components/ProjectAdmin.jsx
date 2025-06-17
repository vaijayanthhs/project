import React,{useEffect,useState} from 'react';
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
import axios from 'axios';
  // Render content based on subpath
    const ProjectAdmin = ({pathname}) => {
      const [users,setUsers]=useState([]);
        useEffect(()=>{
          axios.get("https://dummyjson.com/products")
          .then(res=>{
            setUsers(res.data.products);
          })
          .catch((error)=>{
            console.log(error);
          })
          },[]);
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
            <TableCell>Id</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((users) => (
            <TableRow
              key={users.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {users.id}
              </TableCell>
              <TableCell align="left">{users.title}
              </TableCell>
              <TableCell align="left">{users.category}</TableCell>
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