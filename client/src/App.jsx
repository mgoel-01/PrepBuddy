import { useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import MockInterview from "./pages/MockInterview";
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboard/mock-interview" element={<MockInterview/>}/>
      </Routes>
    </div>
  );
}

export default App;