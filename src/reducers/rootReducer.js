import { combineReducers } from "redux";

import EntreeReducer from "./EntreeReducer";
import AppetizerReducer from "./AppetizerReducer";
import DessertReducer from "./DessertReducer";
import DrinkReducer from "./DrinkReducer";


const rootReducer = combineReducers({
    entreeState: EntreeReducer,
    dessertState: AppetizerReducer,
    appetizerState: DessertReducer,
    drinkState: DrinkReducer
})

export default rootReducer;