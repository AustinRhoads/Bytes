const initial_state = {
    randomEntrees: JSON.parse(localStorage.getItem("random_entrees")) || [],
}



const EntreeReducer = (state = initial_state, action) => {
    switch(action.type){
        case "RANDOM_ENTREES":
           
            return {...state, randomEntrees: action.payload.recipes};
        default:
            return state;
    }
}

export default EntreeReducer;