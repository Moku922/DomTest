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
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(userName));
    li.appendChild(document.createTextNode(" - "+userEmail));
    li.appendChild(document.createTextNode(" - "+userPhone));
    users.appendChild(li);


    let myObj = {
        name: userName ,
        email: userEmail ,
        phone_number: userPhone
    }
    let myObjString = JSON.stringify(myObj);
    localStorage.setItem(userName,myObjString);

    let myObjDestring = JSON.parse(myObjString);



}