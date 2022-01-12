import React, {useEffect} from 'react'
import cuid from 'cuid';

import TitleCard from './TitleCard'



export default function Desserts(props) {


    const display_random_desserts = () => {

        if(props.randomDesserts.length > 0){
            return props.randomDesserts.map(res => {
                if(res.image){
                  return  <TitleCard key={cuid()} recipe={res} recipe_name={res.title} id={res.id} image={res.image}/>
                }
                
            } )
          }
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
