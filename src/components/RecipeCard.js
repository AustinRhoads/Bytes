import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import cuid from 'cuid';

import RECIPE_ACTIONS from '../actions/RecipeActions'


export default function RecipeCard(props) {

    const params = useParams();
    const [id] = useState(params.id);
    const recipe = useSelector(state => state.recipeState.current_recipe);
    const instructions = useSelector(state => state.recipeState.current_recipe.analyzedInstructions);
    const ingredients = useSelector(state => state.recipeState.current_recipe.extendedIngredients);
    const image_src = useSelector(state => state.recipeState.current_recipe.image);
  //  const readyInMinutes = useSelector(state => state.recipeState.current_recipe.readyInMinutes)
  //  const servings = useSelector(state => state.recipeState.current_recipe.servings);
  //  const vegan = useSelector(state => state.recipeState.current_recipe.vegan);
  //  const vegetarian = useSelector(state => state.recipeState.current_recipe.vegetarian);
  //  const glutenFree  = useSelector(state => state.recipeState.current_recipe.glutenFree)
   
    const dispatch = useDispatch();


    const getRecipe = () => {

       
        if(!recipe_retrieved()){
            dispatch(RECIPE_ACTIONS.GET_RECIPE(id))
          console.log("recipe id: ", recipe.id, "props id: ", parseInt(id))
        }
        
    }

    const recipe_retrieved = () => {
        return recipe.id === parseInt(id)
    }

    const render_ingredients = () => {
      
            if(ingredients){
                return ingredients.map(ing => <li key={cuid()}>{ing.original}</li>)
            }
        

    }    

    const render_instructions = () => {
       
        if(instructions){
            return instructions[0].steps.map(ins => 
                <li key={cuid()}>
                    <div>
                        <h2>No. {ins.number}</h2> 
                        <p>{ins.step}</p>
                    </div>
                </li>)
        }
    
    }

    const render_image = () => {
        
        if(image_src){
            return(
                <img alt={recipe.title} src={image_src}></img>
            )
        }
    }

    const render_summary = () => {
        if(recipe_retrieved()){
         
            return (
                <div>{recipe.summary}</div>
            )
  
        }
    }


    useEffect(() => {
       getRecipe()
               
    })

    return (
        <div>
            {render_image()}
            <h2 className="recipe-title">{!!recipe ? recipe.title: ""}</h2>
         
          
            
         

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
