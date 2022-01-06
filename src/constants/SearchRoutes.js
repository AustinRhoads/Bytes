const SEARCH_ROUTES ={
    URL: "https://api.spoonacular.com/recipes/complexSearch?",
    QUERY: "&query=",
    MAX_NUM_RESULTS: "&number=10",
    API_KEY_PREFIX: "apiKey=" + process.env.REACT_APP_SPOON_API_KEY,
    MAIN_COURSE: "&type=maincourse",
};

export default SEARCH_ROUTES;