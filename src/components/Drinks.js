import React, {useEffect} from 'react'
//import cuid from 'cuid';

//import TitleCard from './TitleCard';

export default function Drinks(props) {

    const display_random_drinks = () => {

        return  props.return_recipes_as_titlecards(props.randomDrinks)

    }

    useEffect(() => {
        const li = document.querySelector('#drinks-link');
        props.selectLink(li)
     })

    return (
        <div>
            <div className = "display-titlecards">
             {display_random_drinks()}
            </div>
            
            
        </div>
    )
}
