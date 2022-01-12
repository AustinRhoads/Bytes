import React from 'react'
import RECIPE_ACTIONS from '../actions/RecipeActions'

import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'



export default function TitleCard(props) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const render_image = () => {
        if(props.image){
                return (
                        <img alt={props.recipe_name} src={props.image} />
                )
        }    
    }

    const goToRecipe = () => {
        console.log("IS IT HERE??? ",props.recipe)
        dispatch(RECIPE_ACTIONS.PUSH_RECIPE(props.recipe))
        navigate(`/recipes/${props.id}`)
    }

    return (
        <div className="titlecard" onClick={() => goToRecipe()}>
    
            {render_image()}
            <h1 className="titlecard-title">{props.recipe_name}</h1>

        </div>
    )
}
