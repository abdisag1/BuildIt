import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Editior from './Editior';
import Home from './Home';
// import 'grapesjs/dist/css/grapes.min.css';

import WebBuilder from './WebBuilder';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/editor' element={<Editior />} />
      </Routes>
    </Router>
  )
}

export default App
