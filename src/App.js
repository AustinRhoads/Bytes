import React, { useEffect } from 'react';
import { useSelector, useDispatch,  } from 'react-redux';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate, } from 'react-router-dom'
import cuid from 'cuid';

import Entrees from './components/Entrees';
import Appetizers from './components/Appetizers';
import Desserts from './components/Desserts';
import Drinks from './components/Drinks';
import TitleCard from './components/TitleCard';
import SearchPage from './components/SearchPage';

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
//5. RENDER ALL RETURNED RECIPES UPON REQUEST FORM API AFTER LOCAL STORAGE RELOADED.




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

  const remove_recipes_without_image = (recipe_array) => {
    for(let x = 0; x < recipe_array.length; x++){
      if(!recipe_array[x].image){
          recipe_array.splice(x, 1)
      }
  }
  }

  const return_recipes_as_titlecards = (recipe_array) => {

      

      if(recipe_array.length > 0){

        remove_recipes_without_image(recipe_array);
        
        
        return(
            <div>
                {recipe_array.map(res => { 
                    
                        return <TitleCard key={cuid()} recipe={res} recipe_name={res.title} recipe_id={res.id} image={res.image}/> 
                    } 
                )}
            </div>
        )
    }

  }



  useEffect(() => {

    set_random_recipes()
   
   
  })




  return (
    <div className="App">
      <h1>BYTeS</h1>
   

   

      <Router>
      
        <Navbar/>
                <Routes>

                     
                    <Route  path="/" element={<Navigate to="/entrees"/>}/>
                    <Route  path="/appetizers" element={ <Appetizers randomAppetizers={randomAppetizers} selectLink={selectLink} return_recipes_as_titlecards={return_recipes_as_titlecards}   /> } />
                    <Route  path="/entrees" element={<Entrees randomEntrees={randomEntrees} selectLink={selectLink} return_recipes_as_titlecards={return_recipes_as_titlecards} />} />
                    <Route  path="/desserts" element={ <Desserts randomDesserts={randomDesserts} selectLink={selectLink} return_recipes_as_titlecards={return_recipes_as_titlecards}   /> } />
                    <Route  path="/drinks" element={ <Drinks randomDrinks={randomDrinks} selectLink={selectLink} return_recipes_as_titlecards={return_recipes_as_titlecards}  /> } />
                    <Route path="/recipes" element={ <SearchPage selectLink={selectLink} /> } />
                    <Route  path="/recipes/:id" element={<RecipeCard  />} />
                </Routes>

            </Router>


    </div>
  );
}

export default App;
