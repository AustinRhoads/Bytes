import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import Entrees from './components/Entrees';
import Appetizers from './components/Appetizers';
import Desserts from './components/Desserts';
import Drinks from './components/Drinks';

import RecipeCard from './components/RecipeCard';

import Navbar from './components/Navbar';

import SEARCH_ROUTES from './constants/SearchRoutes';




function App() {

  const randomEntrees = useSelector(state => state.entreeState.randomEntrees)
  const randomAppetizers = useSelector(state => state.appetizerState.randomAppetizers)
  const randomDesserts = useSelector(state => state.dessertState.randomDesserts)
  const randomDrinks = useSelector(state => state.drinkState.randomDrinks)



 // const get_auto_entrees = () => {
 //   if(autoEntrees.length === 0){
 //     fetch(SEARCH_ROUTES.AUTO_ENTREES_URL).then(resp => resp.json()).then(obj => {
 //       setAutoEntrees(obj)
 //     })
 //   }
//
 // }
//
 // const get_auto_appitizers = () => {
 //   fetch(SEARCH_ROUTES.AUTO_APPS_URL).then(resp => resp.json()).then(obj => {
 //   setAutoAppitizers([])
 //   })
 // }
//
 // const get_auto_desserts = () => {
 //   fetch(SEARCH_ROUTES.AUTO_DESSERTS_URL).then(resp => resp.json()).then(obj => {
 //   setAutoDesserts([])
 //   })
 // }
//
 // const get_auto_drinks = () => {
 //   fetch(SEARCH_ROUTES.AUTO_DRINKS_ENTREES_URL).then(resp => resp.json()).then(obj => {
 //   setAutoDrinks([])
 //   })
 // }


  const selectLink = (li) => {

    let links = document.querySelectorAll('.nav-link');
    links.forEach(li => li.classList.remove("selected"));
    li.classList.add("selected")

    
}



  useEffect(() => {
   
   // get_auto_entrees()
   // get_auto_appitizers()
   // get_auto_desserts()
   // get_auto_drinks() 
   var today = new Date()   
   console.log(String(today.getDate()).padStart(2, '0'))
  })




  return (
    <div className="App">
      <h1>BYTeS</h1>
   

   

      <Router>
      
        <Navbar/>
                <Routes>

                     
                    <Route  path="/" element={<Navigate to="/entrees"/>}/>
                    <Route  path="/appetizers" element={ <Appetizers randomAppetizers={randomAppetizers} selectLink={selectLink}  /> } />
                    <Route  path="/entrees" element={<Entrees randomEntrees={randomEntrees} selectLink={selectLink} />} />
                    <Route  path="/desserts" element={ <Desserts randomDesserts={randomDesserts} selectLink={selectLink}   /> } />
                    <Route  path="/drinks" element={ <Drinks randomDrinks={randomDrinks} selectLink={selectLink}  /> } />
                    <Route  path="/recipes/:id" element={<RecipeCard />} />
                </Routes>

            </Router>


    </div>
  );
}

export default App;
