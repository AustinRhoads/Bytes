import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function TitleCard(props) {

    const navigate = useNavigate()

    const render_image = () => {
        if(props.image){
                return (
                        <img alt={props.recipe_name} src={props.image} />
                )
        }    
    }

    const goToRecipe = () => {
        navigate(`/recipes/${props.id}`)
    }

    return (
        <div className="titlecard" onClick={() => goToRecipe()}>
    
            {render_image()}
            <h1 className="titlecard-title">{props.recipe_name}</h1>

        </div>
    )
}
