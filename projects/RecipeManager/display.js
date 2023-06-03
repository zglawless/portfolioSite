function displayRecipes()
{

    id = localStorage.getItem("globalId");
    for(i = 0; i < id; i++)
    {
        //console.log(id);
        let temp_object = localStorage.getItem(i.toString());
        temp_object = JSON.parse(temp_object);
        //console.log(temp_object);
        let new_div = document.createElement("div");
        new_div.classList.add("custom_div");
        new_div.classList.add("bg-light");

        let image = document.createElement("div");
        image.classList.add("image-style");

        let imagePreview = document.createElement("img");
        imagePreview.classList.add("image");

        let name = document.createElement("h2");
        let serves = document.createElement("p");
        let cookTime = document.createElement("p");
        let difficulty = document.createElement("p");

        let buttonGrp = document.createElement("div");
        buttonGrp.classList.add("btn-grp")

        let edit = document.createElement("button");
        let view = document.createElement("button");
        let deleteRecipe = document.createElement("button");

        edit.classList.add("btn-success");
        edit.classList.add("editBtn");
        view.classList.add("btn-primary");
        view.classList.add("viewBtn");
        deleteRecipe.classList.add("btn-danger");
        deleteRecipe.classList.add("deleteBtn");

        edit.innerHTML = "Edit";
        view.innerHTML = "View";
        deleteRecipe.innerHTML = "Delete";

        view.value = temp_object.id;
        deleteRecipe.value = temp_object.id;
        edit.value = temp_object.id;


        serves.innerHTML = "Serves: ";
        cookTime.innerHTML = "Cook Time: ";
        difficulty.innerHTML = "Difficulty: ";

        name.innerHTML += temp_object.name;
        serves.innerHTML += temp_object.serves;
        cookTime.innerHTML += temp_object.cookTime;
        imagePreview.src = temp_object.img;
        difficulty.innerHTML += temp_object.difficulty;


        image.appendChild(imagePreview);
        new_div.appendChild(image);
        new_div.appendChild(name);
        new_div.appendChild(serves);
        new_div.appendChild(cookTime);
        new_div.appendChild(difficulty);

        new_div.appendChild(edit);
        new_div.appendChild(view);
        new_div.appendChild(deleteRecipe);
        
        document.querySelector("#recipes").appendChild(new_div);
    }
}

const container = document.querySelector('#recipes');

container.addEventListener('click', function (e) {

  if (e.target.classList.contains('deleteBtn')) {
    tempId = e.target.value;
    localStorage.removeItem(tempId.toString());
    max = localStorage.getItem("globalId");

    for (i = parseInt(tempId) + 1; i < parseInt(max); i ++){
      temp = localStorage.getItem(i.toString());
      console.log(temp);
      temp = JSON.parse(temp);
      console.log(temp);
      temp.id = parseInt(temp.id) - 1; 
      newId = temp.id;
      localStorage.setItem (newId.toString(), JSON.stringify(temp));
    }
    location.reload();

    localStorage.setItem("globalId", max - 1)
  }

  else if (e.target.classList.contains('viewBtn')) {
    localStorage.setItem("recipe", e.target.value);
    window.location = "recipe.html";
    
  }

  else if (e.target.classList.contains('editBtn')) {
    localStorage.setItem("recipe", e.target.value);
    editRecipe();
  }

});

function viewRecipe(){
    let tempId = localStorage.getItem("recipe");
    let temp_object = localStorage.getItem(tempId.toString());
    temp_object = JSON.parse(temp_object);
    console.log(tempId);
    console.log(temp_object.name);

    let name = document.getElementById("name");
    let img = document.getElementById("recipe-image");
    let serves = document.getElementById("serve");
    let difficulty = document.getElementById("diff");
    let prepTime = document.getElementById("prepTime");
    let cookTime = document.getElementById("cookTime");
    let ingredients = document.getElementById("ing");
    let instructions = document.getElementById("inst");

    name.innerHTML = temp_object.name;
    img.src = temp_object.img;
    serves.innerHTML += temp_object.serves;
    difficulty.innerHTML  += temp_object.difficulty;
    prepTime.innerHTML += temp_object.preparation;
    cookTime.innerHTML += temp_object.cookTime;
    ingredients.innerHTML = temp_object.ingredients.join('<br>');
    instructions.innerHTML = temp_object.instructions.join('<br>');

}

function editRecipe(){
  window.location = "input.html";
  let recipeId = localStorage.getItem("recipe");
  let recipe = localStorage.getItem(recipeId.toString());
  recipe = JSON.parse(recipe);

  document.querySelector('input[name="recipeName"]').setAttribute('value',recipe.name);
  document.forms["recipeForm"]["recipeName"].value = recipe.name;
  document.forms["recipeForm"]["serves"].value = recipe.serves;
  document.forms["recipeForm"]["prep"].value = recipe.preparation;
  document.forms["recipeForm"]["cook"].value = recipe.cookTime;

}