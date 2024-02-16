const list_container = document.getElementById("list-container")
const submit = document.getElementById("submit")
const input = document.getElementById("input")
let editItem = null;

function enableSubmit() {
    submit.disabled = false;
}

submit.addEventListener("click", addItem)

function addItem(e) {
    e.preventDefault()
    if (input.value == "") {
        return false;
    }
    if (editItem) {
        editItem.target.parentNode.childNodes[0].data = input.value;
        editItem = null;
    }
    else {
        const li = document.createElement("li")
        let editBtn = document.createElement("button")
        editBtn.className = "edit";
        editBtn.appendChild(document.createTextNode("edit"))
        const deleteBtn = document.createElement("button")
        deleteBtn.appendChild(document.createTextNode("delete"))
        deleteBtn.className = "delete";
        const text = input.value;
        li.appendChild(document.createTextNode(text))
        li.appendChild(deleteBtn)
        li.appendChild(editBtn)

        list_container.appendChild(li)
    }
    input.value = "";
}

list_container.addEventListener("click", removeItem)

function removeItem(e) {
    const element = e.target.parentNode;
    if (e.target.classList.contains("delete")) {

        list_container.removeChild(element);
    }
    else if (e.target.classList.contains("edit")) {
        //console.log(element)
        input.value = element.childNodes[0].data;
        editItem = e;
        //list_container.removeChild(element);
    }
}

