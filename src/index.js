const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const taskBtn = document.getElementById("task-btn");

//Add task
taskBtn.addEventListener("click", function (addTask) {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    //Append li
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    //Append span (x sign)
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  //Save in local storage
  saveData();
});

//Toggle checked tasks and remove task
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      //Save to local storage
      saveData();
      //Remove task
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      //Save to local storage
      saveData();
    }
  },
  false
);

//Local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

//Show tasks everytime we load the page

window.addEventListener("DOMContentLoaded", showTask);
