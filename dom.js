// console.log(document.head)
// console.log(document.body)
// console.log(document.)
// let headerTitle = (document.getElementById("header-title"));
// headerTitle.innerText = "Hello"

// headerTitle.style.border = "solid 3px #000"

// let title = document.getElementsByClassName("title")[0];
// // console.log(title);
// title.style.color = "green"
// title.style.fontWeight = "900"


// Get Elements by Class

// let item = document.getElementsByClassName("list-group-item");

// item[2].style.background = "green"

// for (let i = 0; i<item.length; i++){
//     item[i].style.fontWeight = "900"
// }

// Get Element by tag

// let li = document.getElementsByTagName("li");

// for (let i = 0; i < li.length; i++){
//     li[i].style.background = "#f4f4f4"
// };

// Query Selector

// let item = document.querySelector(".list-group-item");

// item.style.color = "coral";

// let secondItem = document.querySelector(".list-group-item:nth-child(2)");

// secondItem.style.background = "green";

// let thirdItem = document.querySelector(".list-group-item:nth-child(3)");

// thirdItem.style.display = "none";

// querySelectorAll

// let Item = document.querySelectorAll(".list-group-item");

// Item[1].style.color = "green";

// let odd = document.querySelectorAll(".list-group-item:nth-child(odd)");

// for(let i=0; i < odd.length; i++){
//     odd[i].style.backgroundColor = "green"
// };

// let even = document.querySelectorAll(".list-group-item:nth-child(even)");

// for (let i = 0; i < even.length; i++) {
//     even[i].style.backgroundColor = "yellow"
    
// }
// TRAVERSING THE DOM

let itemList = document.querySelector("#items");

// parentNode

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4"

// parentElement

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4"

// childNodes

// console.log(itemList.childNodes);

// children

// console.log(itemList.children);

// itemList.children[1].textContent = "hello 1";
// itemList.children[0].style.backgroundColor = "aqua";

//  firstChild

// console.log(itemList.firstChild);

// firstElementChild

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.color = "blue"

// lastChild

// console.log(itemList.lastChild);

// lastElementChild

// console.log(itemList.lastElementChild);

// itemList.lastElementChild.style.color = "blue"

// nextSibling

// console.log(itemList.nextSibling);

// nextElementSibling

// console.log(itemList.nextElementSibling);

// previousSibling

// console.log(itemList.previousSibling.previousSibling);

// previousElementSibling

// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green"

// createElement

// createDiv

let newDiv = document.createElement("div");

// add class
// newDiv.className = "helloClass";

// using setAttribute
newDiv.setAttribute("class", "hello");

// add id

// newDiv.id = "HelloID";
 
// using setAttribute
newDiv.setAttribute("id", "helloID");

// createTextNode

let newDivText = document.createTextNode("Hello World");


// add text to div
newDiv.appendChild(newDivText);
newDiv.style.fontSize = "30px";

// add div inside DOM

let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");

container.insertBefore(newDiv, h1);

// console.log(newDiv);
// console.log(newDivText);
