import React, {useState} from 'react';
import './App.css';

import TitleCard from './components/TitleCard';
import cuid from 'cuid';

const URL = "https://api.spoonacular.com/"
const SUFFIX = "complexSearch";
const QUERY = "query="
const MAX_NUM_RESULTS = "&number=10"
const API_KEY_PREFIX = "apiKey="


const TEST_RECIPE_URL = "https://api.spoonacular.com/recipes/660312/analyzedInstructions?apiKey=" + process.env.REACT_APP_SPOON_API_KEY  + "&includeNutrition=false"


function App() {

  const [searchTerm, setSearchTerm] = useState("")
  const [searchDomain, setSearchDomain] = useState("recipes/")
  const [searchResults, setSearchResults] = useState([]);

  const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  }

  const submitSearch = (e) => {

    e.preventDefault();

    const search_url = URL + searchDomain + SUFFIX + "?" + API_KEY_PREFIX + process.env.REACT_APP_SPOON_API_KEY + "&" +  QUERY + searchTerm + MAX_NUM_RESULTS;
    
    fetch(search_url).then(resp => resp.json()).then(obj => {

      setSearchResults(obj.results);

    })

  }

  const test_recipe = () => {
    fetch(TEST_RECIPE_URL).then(resp => resp.json()).then(obj => console.log(obj))
  }

  const display_search_results = () => {
    if(searchResults.length > 0){
      console.log(searchResults)
      return searchResults.map(res => <TitleCard key={cuid()} recipe_name={res.title} recipe_id={res.id} image={res.image}/>)
    }
  }


  return (
    <div className="App">
      <h1>BYTeS</h1>

      <form onSubmit={(e) => submitSearch(e)}>
        <input type="text" onChange={(e) => updateSearchTerm(e)} value = {searchTerm} />
        <input type="submit" value = "Search"  />
      </form>


      
      <button onClick={() => test_recipe()}>TEST RECIPE</button>


      {display_search_results()}
    </div>
  );
}

export default App;
