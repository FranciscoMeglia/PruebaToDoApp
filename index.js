const btnAdd = document.getElementById("btnAdd")
const taskInput = document.getElementById("taskInput")
const tasks = document.getElementById("tasks")

// ADD TASK
btnAdd.addEventListener("click" , () => {

    if (taskInput.value.length > 10) {

    // CREO LOS ELEMENTOS
    const newDiv = document.createElement("div")
    const divContent = document.createElement("p")
    const imgDelete = document.createElement("img")
    // LE DOY CONFIGURACIONES
    imgDelete.classList.add("btnRemove")
    imgDelete.src = "/delete.png"
    divContent.innerText = taskInput.value;
    // LOS UNO
    newDiv.appendChild(divContent)
    newDiv.appendChild(imgDelete)
    newDiv.classList.add("taskCreate")
    tasks.appendChild(newDiv)
    // REMOVER ELEMENTO
    const btnRemove = newDiv.querySelector(".btnRemove")
    btnRemove.addEventListener("click" , () => {
        tasks.removeChild(newDiv)
    })
    } else {
        console.log("su palabra es muy corta")
    }
    
});
