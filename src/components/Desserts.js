import React, {useEffect} from 'react'
//import cuid from 'cuid';

//import TitleCard from './TitleCard'



export default function Desserts(props) {


    const display_random_desserts = () => {


        return  props.return_recipes_as_titlecards(props.randomDesserts)


    }

    useEffect(() => {
        const li = document.querySelector('#desserts-link');
        props.selectLink(li)
     })

    return (
        <div>
            <div className = "display-titlecards">
                {display_random_desserts()}
            </div>
           
            
        </div>
    )
}
