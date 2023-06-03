if (localStorage.getItem("globalId") == null || localStorage.getItem("globalId") == undefined){
    localStorage.setItem("globalId", 1);
}

class Recipe {
    constructor (name, id, difficulty, img, serves, preparation, cookTime, ingredients, instructions){
        this.name = name;
        this.id =id;
        this.difficulty = difficulty;
        this.img = img;
        this.serves = serves; 
        this.preparation = preparation;
        this.cookTime = cookTime;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
}

let exampleRecipe = new Recipe (
    "Crockpot Chili", "0", "Easy", "chili.jpg", 6, "25 minutes", "6 hours", ["2 tbsp. cooking oil", "1 cup onion", "1 cup chopped peppers", "4 tbsp. chili powder", "1 tsp. hot chili powder (optional)", "1 lb ground beef or chicken"
                 , "2 cans red beans", "2 cans kidney beans", "2 cans tomato puree", "2 cans tomato sauce", "1 cup shredded cheese (optional)", "1/2 cup sour cream (optional)"], 
                 "Heat cooking oil in 2 quart skillet. Saute onions and peppers for 5 minutes.Add spices and stir for 30 seconds. Add meat and cook until browned. Approximately 15 minutes. Pour contents of skillet into 3 quart crock pot. Rinse beans and place in crockpot. Open and pour Tomato puree and sauce into crock pot. Cover crockpot and cook on low for 6 hours. Serve into individual bowls and top with sour cream and cheese."
)

localStorage.setItem("0", JSON.stringify(exampleRecipe));
