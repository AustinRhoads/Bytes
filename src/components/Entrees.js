import React, {useState, useEffect} from 'react'
import cuid from 'cuid';

import TitleCard from './TitleCard';


import SEARCH_ROUTES from '../constants/SearchRoutes';




const SEARCH_PREFIX = SEARCH_ROUTES.URL  + SEARCH_ROUTES.API_KEY_PREFIX  +  SEARCH_ROUTES.QUERY 
const SEARCH_SUFFIX = SEARCH_ROUTES.MAIN_COURSE + "&addRecipeInformation=true" + SEARCH_ROUTES.MAX_NUM_RESULTS 


const TEST_RECIPE_URL = "https://api.spoonacular.com/recipes/660312/analyzedInstructions?apiKey=" + process.env.REACT_APP_SPOON_API_KEY  + "&includeNutrition=false"


export default function Entrees(props) {

    const [searchTerm, setSearchTerm] = useState("")
   
    const [searchResults, setSearchResults] = useState([]);
  
    const searchInputChangeHandler = (e) => {
      setSearchTerm(e.target.value);
    }
  
    const submitSearch = (e) => {
  
      e.preventDefault();
  
      const search_url = SEARCH_PREFIX + searchTerm +  SEARCH_SUFFIX;
      
      fetch(search_url).then(resp => resp.json()).then(obj => {
  
        setSearchResults(obj.results);
        console.log(obj.results)
  
      })
  
    }
  
    const test_recipe = () => {
      fetch(TEST_RECIPE_URL).then(resp => resp.json()).then(obj => console.log(obj))
    }
  
    const display_search_results = () => {
      if(searchResults.length > 0){
        return searchResults.map(res => <TitleCard key={cuid()}  recipe={res} recipe_name={res.title} id={res.id} image={res.image}/>)
      } else if(props.randomEntrees.length > 0){
        return props.randomEntrees.map(res => <TitleCard key={cuid()} recipe={res} recipe_name={res.title} id={res.id} image={res.image}/>)
      }
    }



    useEffect(() => {
        const li = document.querySelector('#entrees-link');
        props.selectLink(li)

       
     })



    return (
        <div>
            

            <form className="search-form" onSubmit={(e) => submitSearch(e)}>
            <input className="search-input" type="text" onChange={(e) => searchInputChangeHandler(e)} value = {searchTerm} />
            <input className="search-button" type="submit" value = "Search"  />
            </form>


      
            <button onClick={() => test_recipe()}>TEST RECIPE</button>

            <div id="entree-results-container">
            {display_search_results()}
            </div>
         
            
        </div>
    )
}
