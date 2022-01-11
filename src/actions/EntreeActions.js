import SEARCH_ROUTES from "../constants/SearchRoutes"




const ENTREE_ACTIONS = {
    GET_RANDOM_ENTREES: () => {
        return(dispatch) => {
            console.log("entree actions")
                  fetch(SEARCH_ROUTES.AUTO_ENTREES_URL).then(resp => resp.json()).then(obj => {
                    localStorage.setItem("random_entrees", JSON.stringify(obj.recipes))
                    dispatch({type: "RANDOM_ENTREES", payload: obj})
                  })

            
        }
    
    }
}

export default ENTREE_ACTIONS;