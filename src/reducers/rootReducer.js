import { combineReducers } from "redux";

import EntreeReducer from "./EntreeReducer";
import AppetizerReducer from "./AppetizerReducer";
import DessertReducer from "./DessertReducer";
import DrinkReducer from "./DrinkReducer";
import RecipeReducer from "./RecipeReducer";


const rootReducer = combineReducers({
    entreeState: EntreeReducer,
    dessertState: DessertReducer,
    appetizerState: AppetizerReducer,
    drinkState: DrinkReducer,
    recipeState: RecipeReducer,
})

export default rootReducer;