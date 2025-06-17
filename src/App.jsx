import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin';
import Teammember from './components/Teammember';

const App = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/teammember' element={<Teammember />} />
    </Routes>
    </div>
  )
}

export default App