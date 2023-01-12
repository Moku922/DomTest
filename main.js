const form = document.querySelector("#my-form");


// add event listener
form.addEventListener("submit", storeData);

// function
function storeData(e){
    e.preventDefault();
    let userName = document.querySelector("#name").value;
    let userEmail = document.querySelector("#email").value;
    localStorage.setItem(userName,userEmail);
}