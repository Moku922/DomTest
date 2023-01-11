let form = document.querySelector("#addForm");
let itemList = document.querySelector("#items");
let filter = document.querySelector("#filter");


// form submit event
form.addEventListener("submit", addItem);
// Item Remove Event
itemList.addEventListener("click", removeItem);
// Filter Event
filter.addEventListener("keyup", filterItem)

// ADD ITEM
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

    // Add Description
    let itemDes = document.querySelector("#itemDescription").value;

    // add Description to DOM
    li.appendChild(document.createTextNode(" "+itemDes));


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



// Remove Function

function removeItem(e){
   
    if(e.target.classList.contains("delete")){
        if(confirm("Are You Sure?")){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }        
    }
}

// Adding edit button to existing
let groupItem = document.querySelectorAll(".list-group-item");

for(let i=0; i < groupItem.length ; i++){ 
    let groupItem = document.querySelectorAll(".list-group-item");
 // add edit button
 let editBtn = document.createElement("button");

 // add class 
 editBtn.className = "btn-outline-secondary btn-sm float-right"

 // add text to button
 editBtn.appendChild(document.createTextNode("Edit"));
    groupItem[i].appendChild(editBtn);
}

// FILTER ITEM

// Filter Function
function filterItem(e){
    // convert input text to lower cse
    let text = e.target.value.toLowerCase();
    let items = itemList.querySelectorAll("li");

    // let itemName = items.children.textContent;
    // console.log(items);
    // console.log(itemName);
    items.forEach(function (item) {
        let itemName = item.firstChild.textContent;
        let description = item.childNodes[1].textContent;

        if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    });
}

// ADD Description Input

let input = document.createElement("input");
// Add class
input.className = "form-control mr-2";
// add id
input.id = "itemDescription";
// Add Type
input.type = "text";
// Add to DOM
form.insertBefore(input,form.lastElementChild);
