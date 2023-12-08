// CURD Task
const morque = document.getElementById("morque");
const textInput = document.getElementById("textInput");
const dateInput = document.getElementById("dateInput");
const textarea = document.getElementById("textarea"); 
const msg = document.getElementById("msg");
const task = document.getElementById('tasks')
const add = document.getElementById('add')

morque.addEventListener("submit", (e) => {
  e.preventDefault();
  formEvent();

});



const formEvent = () => {
  if (textInput.value === "") {
    msg.innerHTML = "Please Enter The data";
  } else {
    msg.innerHTML = "";
    values()

    add.setAttribute("data-bs-dismiss" ,"modal")
    add.click()
  }
};



// Get Data
let data = [{}]
const values = () => {
  // data["text"] = textInput.value
  // data["date"] = dateInput.value
  // data["task"] = textarea.value
  // console.log(data)
  data.push({
    text: textInput.value,
    date : dateInput.value,
    task : textarea.value
  })

  // Storage
  localStorage.setItem("data" , JSON.stringify(data))
  createData()
}



// Create Data
const createData = () => {
  task.innerHTML = ""
  data.map((ele, index) => {
    return (task.innerHTML += `<div id = ${index}>
    <span class="fw-bolder">${ele.text}</span>
    <span class="small-text-secondary">${ele.date}</span>
    <p>${ele.task}</p>
    <span class="options">
        <i  onclick="editData(this)" data-bs-toggle="modal" data-bs-target="#morque" class="fa-solid fa-pen-to-square"></i>
        <i onclick ="deleteData(this)" class="fa-solid fa-trash"></i>
    </span>
  </div>`)
  })
resetForm()
}


// Reset Form
const resetForm = () => {
  textInput.value =  "";
  dateInput.value = "";
  textarea.value = "";
}


// Data Add in Layout and store in localstorage
(() => {
  data = JSON.parse(localStorage.getItem("data")) || []
  createData()
})()



// Delete Task
const deleteData = (del) =>{
  del.parentElement.parentElement.remove()
  data.splice(del.parentElement.parentElement.id , 1)
  localStorage.setItem("data" , JSON.stringify(data))
}



// Edit Data
const editData = (edit) => {
  let task = edit.parentElement.parentElement;
  textInput.value = task.children[0].innerHTML;
  dateInput.value = task.children[1].innerHTML;
  textarea.value = task.children[2].innerHTML;

  deleteData(del)
}
