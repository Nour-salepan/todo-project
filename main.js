const todoInput = document.getElementById("todoType");
const todoList = document.getElementById("todo");
const tasks = document.getElementById("tasks");
const deleteBtn = document.getElementById("delete");
const btn = document.querySelector("#btn");
const modal = document.querySelector("[data-modal]");
const modalClose = document.querySelector("[data-modal-close]");

let timer = 0;

function startTasks(e) {
  e.preventDefault();

  if (todoInput.value !== "") {
    addTask();
  } else {
    showPopUp();
  }
}

const addTask = () => {
  let inputValue = todoInput.value;
  timer++;
  tasks.innerText = timer;

  todoList.innerHTML += ` <div class="todos">
           <li class="todoList" id="todoList">${inputValue}</li>
          <span class="btn btn-affect btn1" id="btn1">&times;</span>
          <span class="btn btn-affect btn2" id="btn2">&RightArrow;</span>
          </div>`;

  todoInput.value = "";
};

const showPopUp = () => {
  modal.showModal();

  modalClose.addEventListener("click", () => {
    modal.close();
  });
};

todoList.addEventListener("click", (e) => {
  if (e.key === "Enter") {
    startTasks();
  }

  let clickedEl = e.target;
  checkForClick(clickedEl);
});

const checkForClick = (clickedEl) => {
  // if close btn is clicked then remove its parentElement and decrement tasks
  if (clickedEl.classList.contains("btn1")) {
    clickedEl.parentElement.remove();
    timer--;
    tasks.innerText = timer;
  }
  // if btn2 is clicked then add disabled class
  if (clickedEl.classList.contains("btn2")) {
    const liItem = clickedEl.parentElement.querySelector(".todoList");
    liItem.classList.add("disabled");
  }
};
const deleteAllTasks = () => {
  document.querySelectorAll(".todos").forEach((div) => {
    div.remove();
    timer = 0;
    tasks.innerText = timer;
  });
};

btn.addEventListener("click", startTasks);
deleteBtn.addEventListener("click", deleteAllTasks);
