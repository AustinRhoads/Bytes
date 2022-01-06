import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import Entrees from './components/Entrees';
import Appetizers from './components/Appetizers';
import Desserts from './components/Desserts';
import Drinks from './components/Drinks';

import Navbar from './components/Navbar';




function App() {




  return (
    <div className="App">
      <h1>BYTeS</h1>

   

      <Router>
      
        <Navbar/>
                <Routes>
                   
                    
                   
                     
                    <Route path="/" element={<Navigate to="/entrees"/>}/>
                    <Route path="/appetizers" element={ <Appetizers/> } />
                    <Route path="/entrees" element={<Entrees/>} />
                    <Route path="/desserts" element={ <Desserts/> } />
                    <Route path="/drinks" element={ <Drinks/> } />
                </Routes>

            </Router>


    </div>
  );
}

export default App;
