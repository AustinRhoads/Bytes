import React, {useState} from 'react'
import { useParams } from 'react-router-dom'


export default function RecipeCard(props) {

    const params = useParams();
    const [id] = useState(params.id);
   // const [recipeObject, setRecipeObject] = useState({})
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState([])
    const INSTRUCTIONS_URL = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=` + process.env.REACT_APP_SPOON_API_KEY  + "&includeNutrition=false"
    const INGREDIENTS_URL = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=` + process.env.REACT_APP_SPOON_API_KEY  + "&includeNutrition=false"

    const getRecipe = () => {
       // if(ingredients.length === 0){
       //    // fetch(INGREDIENTS_URL).then(resp => resp.json()).then(obj => setIngredients(obj.ingredients))
       //     console.log("did it once")
       // }
//
       // if(instructions.length === 0){
       //    // fetch(INSTRUCTIONS_URL).then(resp => resp.json()).then(obj => setInstructions(obj))
       //     console.log("did it once")
       // }
//
        if(localStorage.getItem("recipe_id") !== id){
            localStorage.setItem("recipe_id", id);
             fetch(INGREDIENTS_URL).then(resp => resp.json()).then(obj => {
                 console.log(obj.ingredients)
                 localStorage.setItem("ingredients",obj.ingredients)
                })
            console.log("set recipe id.");
        }else {
                console.log("recipe id is already set to: ", localStorage.getItem("recipe_id") )
        }

        console.log(localStorage)

     // localStorage.setItem("recipe_id", "")
    
    }

    const render_ingredients = () => {
       // if(ingredients.length > 0){
       //     return ingredients.map(ing => <li key={cuid()}>{ing.name}...{ing.amount.us.value}{ing.amount.us.unit}</li>)
       // }
    }    

    const render_instructions = () => {
        if(instructions.length > 0){
            return instructions.map(ins => <li>{ins[0]}</li>)
        }
    }

    return (
        <div>
            <h2>Recipe Card: {id}</h2>
            {getRecipe()}

        <div>
            <h3>ingredients</h3>

            <ul>
                        {render_ingredients()}
            </ul>

        </div>
 

    <div>
        <h3>instructions</h3>

        <ul>

            {render_instructions()}
        </ul>

    </div>

            
           
            
        </div>
    )
};
