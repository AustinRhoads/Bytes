import React from 'react'

export default function TitleCard(props) {

    const render_image = () => {
        if(props.image){
            return (
                <img alt={props.recipe_name} src={props.image} />
            )
        }
    }

    return (
        <div>
            <h1>{props.recipe_name}</h1>
            {render_image()}
        </div>
    )
}
