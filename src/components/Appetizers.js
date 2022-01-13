import React, {useEffect} from 'react'
//import TitleCard from './TitleCard'
//import cuid from 'cuid'

export default function Appetizers(props) {

    const display_random_appetizers = () => {
        
      return  props.return_recipes_as_titlecards(props.randomAppetizers)


    }

    useEffect(() => {
       const li = document.querySelector('#appetizer-link');
       props.selectLink(li)
    })

    return (
        <div>
            <div className = "display-titlecards">
                {display_random_appetizers()}
            </div>
        </div>
    )
}
