'use strict';

// #1
const strawberry = document.getElementById("berry");
strawberry.style.backgroundColor = "red";
console.log(`I found the berry ${strawberry.innerText}`);

// #2
const orange = document.querySelector("[data-foodtype=squishy]");
orange.style.backgroundColor = "orange";
console.log(`I found the berry ${orange.innerText}`);

// #3.1
const li = document.getElementsByTagName('li');
console.log(li);

// #3.2
console.log("Using the for loop here");

for (let i = 0; i < li.length; i++) {
    console.log(li[i].innerText);
    li[i].style.width = "100px";
    li[i].style.listStyle = "none";
    if (li[i].innerText === "Pear") {
        li[i].style.backgroundColor = "green";
    }
}

// #4.1
const nodes = document.querySelectorAll("li");
console.log(nodes);

// #4.2
console.log("Using forEach here");

nodes.forEach(it => {
    it.style.borderStyle = "solid";
    console.log(it.innerText);
});



