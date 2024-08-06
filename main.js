const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
const btn_add = document.querySelector('.row button')

//ADD
function addTasks() {
  btn_add.onclick = function () {
    if (inputBox.value === '') {
      alert('Điền thông tin vào đcm')
    }
    else {
      let li_item = document.createElement("li")
      li_item.innerHTML = inputBox.value
      listContainer.appendChild(li_item)
      // create delete btn
      let deleteButton = document.createElement("span")
      deleteButton.innerHTML = "\u00d7"
      li_item.appendChild(deleteButton)
    }
    inputBox.value = ""
    saveData()
    showTask()
  }
}

function updateTask() {
  let li_content = document.querySelector("li").textContent
  console.log(li_content)

}
//Check ore uncheck, delete, update
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked")
    saveData()
  }
  else if (e.target.tagName === "SPAN") {
    console.log(e.target.parentElement)
    e.target.parentElement.remove()
    saveData()
  }
}, false)


function deleteAllTasks() {
  let listTasks = document.querySelectorAll("li")
  listTasks.forEach((e) => e.remove())
  saveData()

}




// saveData

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML)
}

// show data
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data")
}
showTask()

// Start
function start() {
  addTasks()
}
start()