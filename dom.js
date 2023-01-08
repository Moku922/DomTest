// console.log(document.head)
// console.log(document.body)
// console.log(document.)
let headerTitle = (document.getElementById("header-title"));
headerTitle.innerText = "Hello"

headerTitle.style.border = "solid 3px #000"

let title = document.getElementsByClassName("title")[0];
console.log(title);
title.style.color = "green"
title.style.fontWeight = "900"


// Get Elements by Class

let item = document.getElementsByClassName("list-group-item");

item[2].style.background = "green"

for (let i = 0; i<item.length; i++){
    item[i].style.fontWeight = "900"
}

// Get Element by tag

let li = document.getElementsByTagName("li");

for (let i = 0; i < li.length; i++){
    li[i].style.background = "#f4f4f4"
}


