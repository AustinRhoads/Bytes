import React, { useEffect } from 'react';
import { useSelector, useDispatch,  } from 'react-redux';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate, } from 'react-router-dom'

import Entrees from './components/Entrees';
import Appetizers from './components/Appetizers';
import Desserts from './components/Desserts';
import Drinks from './components/Drinks';

import RecipeCard from './components/RecipeCard';

import Navbar from './components/Navbar';

import ENTREE_ACTIONS from './actions/EntreeActions'
import APPETIZER_ACTIONS from './actions/AppetizerActions';
import DESSERT_ACTIONS from './actions/DessertActions';
import DRINK_ACTIONS from './actions/DrinkActions';


//TODO: 
//1. RECALL THE RANDOMS WITH NUTRIENT FACT
//2. WRITE FUNCTION TO RECALL RANDOMS DAILY
//3. PUT NUTRITION AND DIET FACTS IN RECIPE CARD
//4. USE COMPONENT FROM AR CODE TO SHOW INGREDIENTS AND RECIPE STEPS SEPARATELY




function App() {

  const randomEntrees = useSelector(state => state.entreeState.randomEntrees)
  const randomAppetizers = useSelector(state => state.appetizerState.randomAppetizers)
  const randomDesserts = useSelector(state => state.dessertState.randomDesserts)
  const randomDrinks = useSelector(state => state.drinkState.randomDrinks)
 

  const dispatch = useDispatch()
  
  


  const get_random_entrees = () => {
      dispatch(ENTREE_ACTIONS.GET_RANDOM_ENTREES())
  }

  const get_random_appetizers = () => {
    console.log("started")
    dispatch(APPETIZER_ACTIONS.GET_RANDOM_APPETIZERS())
  }

  const get_random_desserts = () => {
    dispatch(DESSERT_ACTIONS.GET_RANDOM_DESSERTS())
  }

  const get_random_drinks = () => {
    dispatch(DRINK_ACTIONS.GET_RANDOM_DRINKS())
  }





  const selectLink = (li) => {

    let links = document.querySelectorAll('.nav-link');
    links.forEach(li => li.classList.remove("selected"));
    li.classList.add("selected")

    
}

  const set_random_recipes = () =>{

    if(randomEntrees.length <= 0){
      get_random_entrees()
    }

  
    if(randomAppetizers.length <= 0){
      get_random_appetizers()
    }
  
    if(randomDesserts.length <= 0){
      get_random_desserts()
    }
  
    if(randomDrinks.length <= 0){
      get_random_drinks()
    }



  }



  useEffect(() => {

    set_random_recipes()
   
    console.log(randomEntrees )
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
                    <Route  path="/recipes/:id" element={<RecipeCard  />} />
                </Routes>

            </Router>


    </div>
  );
}

export default App;
