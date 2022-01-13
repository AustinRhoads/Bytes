import SEARCH_ROUTES from '../constants/SearchRoutes'; 

const RECIPE_ACTIONS = {
    GET_RECIPE: (id) => {
        //console.log("recipe action: ", id, "URL: ", SEARCH_ROUTES.RECIPE_URL + id + "/information?" + SEARCH_ROUTES.API_KEY_PREFIX + "&includeNutrition=false")
        return(dispatch) => {
            fetch(SEARCH_ROUTES.RECIPE_URL + id + "/information?" + SEARCH_ROUTES.API_KEY_PREFIX + "&includeNutrition=false").then(resp => resp.json()).then(obj => {
                dispatch({type: "SETTING_RECIPE", payload: obj})
            })
        }
    },

    PUSH_RECIPE: (recipe) =>{
      
        return(dispatch) => {
            //console.log("PUSH IT REAL GOOD: ", recipe)
            dispatch({type: "SETTING_RECIPE", payload: recipe})
        }
    }
}
export default RECIPE_ACTIONS;