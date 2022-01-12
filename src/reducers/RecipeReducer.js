const initialState = {
    current_recipe: {},
}

const RecipeReducer = (state = initialState, action) => {

    switch(action.type){
        case "SETTING_RECIPE":
        return {...state, current_recipe: action.payload}

        default:
            return state;
    }

}

export default RecipeReducer;