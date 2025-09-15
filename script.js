let btn = document.getElementById("btn");
let input = document.getElementById("add-item");

let list = [""];

function addItemList() {
  list.push(input.value);
  console.log(list);
  input.value = "";
}

btn.addEventListener("click", addItemList());
