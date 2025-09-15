let list = document.querySelector("ul");
let addItem = document.getElementById("add-item");
let btn = document.getElementById("btn");

btn.addEventListener("click", addItemList);

function addItemList() {
  let template = list.querySelector("li");
  let newItem = template.cloneNode(true);
  newItem.querySelector("p").textContent = addItem.value;

  list.append(newItem);
  addItem.value = "";
}

let checkbox = document.querySelector(".teste");
let BtnDelete = document.querySelector("a");
BtnDelete.addEventListener("click", deleteItem);

function deleteItem(){
  if (checkbox.checked) {
    newitem.remove();
    console.log = newItem
  }
}
