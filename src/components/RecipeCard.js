import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import cuid from 'cuid';

import RECIPE_ACTIONS from '../actions/RecipeActions'



export default function RecipeCard(props) {

    const params = useParams();
    //

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

       
        if(!recipe_retrieved() && !localStorage.getItem(id)){
            dispatch(RECIPE_ACTIONS.GET_RECIPE(id))
          
          console.log("had to reload from API")
        } else if (!recipe_retrieved() && localStorage.getItem(id)){
            console.log(JSON.parse(localStorage.getItem(id)))
            dispatch(RECIPE_ACTIONS.PUSH_RECIPE(JSON.parse(localStorage.getItem(id))))
        }
        
    }

    const recipe_retrieved = () => {
        return recipe.id === parseInt(id)
    }

    const set_recipe_in_local = () => {

        if(!localStorage.getItem(id)){
            localStorage.setItem(id, JSON.stringify(recipe))
        }
        
    }

    const clean_up_local = () =>{
       // localStorage.clear()
            localStorage.removeItem(id)
            console.log("removed: ", id)
    }

    const render_ingredients = () => {
      
            if(ingredients){
                return ingredients.map(ing => <div className="ingredient" key={cuid()}>{ing.original}</div>)
            }
        

    }    

    const render_instructions = () => {
       
        if(instructions){
            return instructions[0].steps.map(ins => 
                <div className="step" key={cuid()}>
                    <div>
                        <h2>No. {ins.number}</h2> 
                        <p>{ins.step}</p>
                    </div>
                </div>)
        }
    
    }

    const render_image = () => {
        
        if(image_src){
            return(
                <img alt={recipe.title} src={image_src}></img>
            )
        }
    }




    useEffect(() => {
        
       getRecipe()
       set_recipe_in_local()
       console.log("mounted: ", id)
       return () => {
        clean_up_local()
       }
               
    })

    return (
        <div className="recipe-card">
            {render_image()}
            <h2 className="recipe-title">{!!recipe ? recipe.title: ""}</h2>
         
          
            
         

        <div>
            <h3>ingredients</h3>

            <div>
                        {render_ingredients()}
            </div>

        </div>
 

    <div>
        <h3>Directions</h3>

        <div className="steps-container">

            {render_instructions()}
        </div>

    </div>

            
           
            
        </div>
    )
};
