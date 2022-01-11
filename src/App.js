import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import Entrees from './components/Entrees';
import Appetizers from './components/Appetizers';
import Desserts from './components/Desserts';
import Drinks from './components/Drinks';

import RecipeCard from './components/RecipeCard';

import Navbar from './components/Navbar';

import ENTREE_ACTIONS from './actions/EntreeActions'

//import SEARCH_ROUTES from './constants/SearchRoutes';




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

  }

  const get_random_desserts = () => {

  }

  const get_random_drinks = () => {

  }
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

  const set_random_recipes = () =>{

    if(randomEntrees.length < 0){
      get_random_entrees()
    }

  
    if(randomAppetizers.length < 0){
      get_random_appetizers()
    }
  
    if(randomDesserts.length < 0){
      get_random_desserts()
    }
  
    if(randomDrinks.length < 0){
      get_random_drinks()
    }



  }



  useEffect(() => {

    set_random_recipes()


   // get_random_entrees()
   
   // get_auto_entrees()
   // get_auto_appitizers()
   // get_auto_desserts()
   // get_auto_drinks() 
   //var today = new Date()   
   //console.log(String(today.getDate()).padStart(2, '0'))
  }, [randomEntrees, randomAppetizers, randomDesserts, randomDrinks])




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
