let form = document.querySelector("#addForm");
let itemList = document.querySelector("#items");

// form submit event
form.addEventListener("submit", addItem);

// add item
function addItem(e) {
    e.preventDefault();

    // get item value
    let newItem = document.querySelector("#item").value;

    // create new li element
    let li = document.createElement("li");

    // add class to li
    li.className = "list-group-item";

    // add textNode with input value
    li.appendChild(document.createTextNode(newItem));



    // ADD BUTTON
    // Crete Button
    let deleteBtn = document.createElement("button");
    // add class  to button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";

    // add textNode
    deleteBtn.appendChild(document.createTextNode("X"));

    // add button to li
    li.appendChild(deleteBtn);

    // add li to itemList
    itemList.appendChild(li);

    // add edit button
    let editBtn = document.createElement("button");

    // add class 
    editBtn.className = "btn-outline-secondary btn-sm float-right"

    // add text to button
    editBtn.appendChild(document.createTextNode("Edit"));

    // adding edit to li

    li.appendChild(editBtn);
}

// REMOVE ITEM

// add event listener
itemList.addEventListener("click", removeItem);

// Remove Function

function removeItem(e){
   
    if(e.target.classList.contains("delete")){
        if(confirm("Are You Sure?")){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }        
    }
}