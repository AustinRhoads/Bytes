import React, {useEffect} from 'react'
import cuid from 'cuid';

import TitleCard from './TitleCard';

export default function Drinks(props) {

    const display_random_drinks = () => {

        if(props.randomDrinks.length > 0){
            return props.randomDrinks.map(res => {
                if(res.image){
                  return  <TitleCard key={cuid()} recipe={res} recipe_name={res.title} id={res.id} image={res.image}/>
                }
                
            } )
          }
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
