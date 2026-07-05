import { useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Home from './pages/Home';

function App() {
  return (
    <div className='bg-[#1c1c1c]'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;