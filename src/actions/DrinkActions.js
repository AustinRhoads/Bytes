import SEARCH_ROUTES from "../constants/SearchRoutes"




const DRINK_ACTIONS = {
    GET_RANDOM_DRINKS: () => {
        return(dispatch) => {
            console.log("drink actions")
                  fetch(SEARCH_ROUTES.AUTO_DRINKS_URL).then(resp => resp.json()).then(obj => {
                     // console.log(obj)
                    localStorage.setItem("random_drinks", JSON.stringify(obj.recipes))
                    dispatch({type: "RANDOM_DRINKS", payload: obj})
                  })

            
        }
    
    }
}

export default DRINK_ACTIONS;