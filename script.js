let btn = document.getElementById("btn");
let input = document.getElementById("add-item");
let fullList = document.querySelector(".list-task");
let list = [];

function addItemList() {
  list.push(input.value);
  input.value = "";
  newtasks();
}

function newtasks() {
  let newLi = "";

  list.forEach((tasks, position) => {
    newLi += `
     <li>
          <div>
            <input type="checkbox" class="teste" />
            <p>${tasks}</p>
          </div>
            <img src="assets/icons/Frame-3.svg" alt="" onclick="deleteItem(${position})">
        </li>
    `;
  });

  fullList.innerHTML = newLi;
}

function deleteItem(position) {
  list.splice(position, 1)
  newtasks()
}

btn.addEventListener("click", addItemList);
