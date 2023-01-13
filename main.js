const form = document.querySelector("#my-form");


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
    let myObj = {
        name: userName ,
        email: userEmail 
    }
    let myObjString = JSON.stringify(myObj);
    localStorage.setItem(userName,myObjString);

    let myObjDestring = JSON.parse(myObjString);



}