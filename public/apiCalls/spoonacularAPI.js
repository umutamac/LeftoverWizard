// API documentation: https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients

//example api call for "what can i do with stuff in my fridge": https://api.spoonacular.com/recipes
///findByIngredients?ingredients=apples,+flour,+sugar&number=2

// var ingredients = 
const numOfRecipes = 5; // We want 5 recipes to show up
const rankingNum = 2; // 1 for maximizing used ingredients, 2 for minimizing missing ingredients
var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + ingredients + "&number="+ numOfRecipes + "&ranking="+ rankingNum;
$.ajax({  // Performing an AJAX request with the queryURL
  url: queryURL,
  method: "GET"
}).then(function(response) {
      console.log(response);
      const map1 = response.map(function(response){
          const recipeID = response.id;
          const recipeTitle = response.title;
          const recipeImage = response.image;

          
      })

  })

