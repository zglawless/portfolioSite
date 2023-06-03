function addRecipe(){

    if (checkForm() == false){
        return false;
    }

    else {
    id = localStorage.getItem("globalId");
    let name = document.querySelector('#recipeName').value;
    let image = localStorage.getItem("thumbnail");
    let serves = document.querySelector('#serves').value;
    let preparation = document.querySelector('#prep').value;
    let cookTime = document.querySelector('#cook').value;
    //let ingredients = document.querySelector('#ingredients').value;
    //let instructions = document.querySelector("#instructions").value;

    var ele = document.getElementsByName('inlineRadioOptions');

    let difficulty = "";
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
         difficulty = ele[i].value;
    }

    var ingredientsArr = [];
    for (i = 0; i < ing_id + 1; i++){
        let temp = document.querySelector("#ings" + i).value;
        ingredientsArr.push(temp);
    }

    var instructionsArr = [];
    for (i = 0; i < inst_id + 1; i++){
        let temp = document.querySelector("#insts" + i).value;
        instructionsArr.push(temp);
    }

    //console.log(instructionsArr);
    let temp = new Recipe(name, id, difficulty, image, serves, preparation, cookTime, ingredientsArr, instructionsArr);
    //console.log(temp);

    localStorage.setItem(id.toString(), JSON.stringify(temp));
    id++;
    localStorage.setItem("globalId", id);
    //console.log(localStorage.getItem("globalId"));
    window.location.href="index.html";
    localStorage.setItem('thumbnail', "");
}
}

document.querySelector("#recipePicture").addEventListener("change", (event) =>{ 
    const tempimg = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(tempimg);
    reader.addEventListener("load", () => {
        console.log(reader.result);
        localStorage.setItem('thumbnail', reader.result);
    });
});


let ing_id =0;
let inst_id=0;
function addIngredient(){
    ing_id ++;
    input = document.createElement("input");
    input.type = "text";
    input.name = ing_id;
    input.classList.add("form-control");
    input.setAttribute("id", "ings" + ing_id);
    let ings = document.getElementById("ings");
    var remove = document.createElement("input");
    remove.setAttribute('id', 'ing' + ing_id)
    remove.classList.add("btn-danger");
    remove.onclick = function(e) {
        removeElement(e)
      };

    remove.setAttribute("type", "button");

    remove.value = "Remove";
    ings.appendChild(input);
    ings.appendChild(remove);
}

function removeElement(ev) {
    var button = ev.target;
    var field = button.previousSibling;
    var div = button.parentElement;
    div.removeChild(button);
    div.removeChild(field);
  }

  function addInstruction(){
    inst_id ++;
    input = document.createElement("textarea");
    input.type = "text";
    input.name = inst_id;
    input.classList.add("form-control");
    input.rows = "1";
    input.setAttribute("id", "insts" + inst_id);
    let insts = document.getElementById("insts");
    var remove = document.createElement("input");
    remove.setAttribute('id', 'inst' + inst_id)
    remove.classList.add("btn-danger");
    remove.onclick = function(e) {
        removeElement(e)
      };

    remove.setAttribute("type", "button");

    remove.value = "Remove";
    insts.appendChild(input);
    insts.appendChild(remove);
}

function checkForm () {
    let x = document.forms["recipeForm"]["recipeName"].value;
    if (x == "") {
        alert("Recipe Name must be filled out.");
        return false;
    }
    x = document.forms["recipeForm"]["serves"].value;
    if (x == "") {
        alert("People served must be filled out.");
        return false;
    }
    x = document.forms["recipeForm"]["prep"].value;
    if (x == "") {
        alert("Preparation time must be filled out.");
        return false;
    }
    x = document.forms["recipeForm"]["cook"].value;
    if (x == "") {
        alert("Cook Time must be filled out.");
        return false;
    }
    x = document.querySelector("#ings0").value;
    if (x == "") {
         alert("Ingredients must be filled out.");
        return false;
    }
    x = document.querySelector("#insts0").value;
    if (x == "") {
        alert("Instructions must be filled out.");
        return false;
    }
    
}