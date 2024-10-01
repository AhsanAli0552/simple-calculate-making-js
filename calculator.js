
const result =document.querySelector("#result");

function display(value){
   result.value += value;

}

function displayresult(){
    result.value = eval(result.value);
}

function displayDE(){
    result.value = result.value.slice(0,-1);
}
function displayAC(){
    result.value = "";
}