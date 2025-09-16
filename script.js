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
            <input type="checkbox" class="check-${position}" />
            <p>${tasks}</p>
          </div>
            <img src="assets/icons/Frame-3.svg" alt="" onclick="deleteItem(${position})">
        </li>
    `;
  });

  fullList.innerHTML = newLi;
}

function deleteItem(position) {
  const checkbox = document.querySelector(`.check-${position}`);
  const msAlert = document.getElementById("teste");
  if (checkbox.checked) {
    list.splice(position, 1);
    itemAlert = `
        <div id="alert">
          <div>
            <img src="assets/icons/warning-circle-filled.svg" alt="" />
            <span>O item foi removido da lista</span>
          </div>
          <img src="assets/icons/delete-small.svg" alt="" />
        </div>
    `;
    msAlert.innerHTML = itemAlert;
    newtasks();
  }
}

btn.addEventListener("click", addItemList);
