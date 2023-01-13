const form = document.querySelector("#my-form");
const users = document.querySelector("#users")


// add event listener
form.addEventListener("submit", storeData);


// function
// function storeData(e){
//     e.preventDefault();
//     let userName = document.querySelector("#name").value;
//     let userEmail = document.querySelector("#email").value;
//     localStorage.setItem(userName,userEmail);
// }
function storeData(e){
    e.preventDefault();

    let userName = document.querySelector("#name").value;
    let userEmail = document.querySelector("#email").value;
    let userPhone = document.querySelector("#mNumber").value;
// adding userData into screen
    // creating new li
    let li = document.createElement("li");
    // Creating Text node of user Info li and adding them In DOM
    li.appendChild(document.createTextNode(userName));
    li.appendChild(document.createTextNode(" - "+userEmail));
    li.appendChild(document.createTextNode(" - "+userPhone));
    
    users.appendChild(li);
 
   // delete button
   let deleteBtn = document.createElement("input");
   // add class  to button
//    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.type = "button";
    deleteBtn.value = "delete";
    deleteBtn.onclick = ()=> {
        users.removeChild(li);
        localStorage.removeItem(userName);
    }
   // add button to li
   li.appendChild(deleteBtn);
    let myObj = {
        name: userName ,
        email: userEmail ,
        phone_number: userPhone
    }
    let myObjString = JSON.stringify(myObj);
    localStorage.setItem(userName,myObjString);

    let myObjDestring = JSON.parse(myObjString);


}

