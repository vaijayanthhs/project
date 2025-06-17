import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh'
    }}>
      <h1 style={{textAlign: 'center', fontSize: '50px', fontFamily: 'sans-serif', color: 'black'}}>Welcome</h1>
      <ButtonGroup variant="contained" aria-label="Home buttons">
      <Link to='/admin'><Button>Admin</Button></Link>
      <Link to='/teammember'><Button>TeamMember</Button></Link>
    </ButtonGroup>
    </div>
  )
}

export default Home