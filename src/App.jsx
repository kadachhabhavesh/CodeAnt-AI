import { useState } from 'react'
import './App.css';
import Repositories from "./components/Repositories/Repositories";
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index exact element={<Login />} />
          <Route path="/repositories" element={<Repositories />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
