const SEARCH_ROUTES ={
    URL: "https://api.spoonacular.com/recipes/complexSearch?",
    RANDOM_RECIPES_URL: "https://api.spoonacular.com/recipes/random?",
    QUERY: "&query=",
    MAX_NUM_RESULTS: "&number=10",
    API_KEY_PREFIX: "apiKey=" + process.env.REACT_APP_SPOON_API_KEY,
    MAIN_COURSE: "&type=maincourse",
    AUTO_ENTREES_URL: "https://api.spoonacular.com/recipes/random?apiKey=" + process.env.REACT_APP_SPOON_API_KEY + "&tags=maincourse,dinner,lunch&addRecipeNutrition=true&number=10",
    AUTO_APPS_URL: "https://api.spoonacular.com/recipes/random?apiKey=" + process.env.REACT_APP_SPOON_API_KEY + "&tags=appetizer,fingerfood,snack&addRecipeNutrition=true&number=10",    
    AUTO_DESSERTS_URL: "https://api.spoonacular.com/recipes/random?apiKey=" + process.env.REACT_APP_SPOON_API_KEY + "&tags=dessert&addRecipeNutrition=true&number=10",
    AUTO_DRINKS_URL: "https://api.spoonacular.com/recipes/random?apiKey=" + process.env.REACT_APP_SPOON_API_KEY + "&tags=beverage,drink&addRecipeNutrition=true&number=10",
    RECIPE_URL: "https://api.spoonacular.com/recipes/",

};

export default SEARCH_ROUTES;