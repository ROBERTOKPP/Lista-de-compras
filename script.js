let btn = document.getElementById("btn");
let input = document.getElementById("add-item");
let fullList = document.querySelector(".list-task");
let list = [];

// adcionar o item na lista verificando se esta vazio
function addItemList() {
  const vlr = input.value.trim();
  if (vlr == "") {
    alert("Digite um valor valido!");
    return;
  } else {
    list.push(input.value);
    input.value = "";
    newtasks();
  }
}

// usar a tecla enter para acionar a função de adionar o item
input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") addItemList();
});

// adcionar o item na tela - formatada ja
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

// deletar o item da lista e add o alert em baixo
function deleteItem(position) {
  const checkbox = document.querySelector(`.check-${position}`);
  const msAlert = document.getElementById("alert-del");
  if (checkbox.checked) {
    list.splice(position, 1);
    itemAlert = `
        <div id="alert">
          <div>
            <img src="assets/icons/warning-circle-filled.svg" alt="" />
            <span>O item foi removido da lista</span>
          </div>
          <img src="assets/icons/delete-small.svg" alt="" onclick="delAlert()" />
        </div>
    `;
    msAlert.innerHTML = itemAlert;
    newtasks();
  }
}
//deletar o alerta de exclusão do item
function delAlert() {
  const alertbox = document.getElementById("alert");
  if (alertbox) {
    alertbox.remove();
  }
}

btn.addEventListener("click", addItemList);
