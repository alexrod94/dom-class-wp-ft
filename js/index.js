// Vanilla JavaScript
// By tag
const headers = document.getElementsByTagName("h2");
const myArray = [...headers];

myArray.forEach((header) => (header.style.color = "red"));

// By id
const message = document.getElementById("unique");

// By class
const blue = document.getElementsByClassName("blue");

[...blue].forEach((el) => (el.style.color = "blue"));

console.log(headers);

// Query Selector
const firstH3 = document.querySelector("h3");
console.log(firstH3);

// Query Selector All
const allH3s = document.querySelectorAll("h3");
allH3s.forEach((h3) => {
  h3.style.fontFamily = "Arial";
  h3.style.backgroundColor = "green";
  h3.style.fontSize = "24px";
});

// Change some text
const button = document.querySelector("button");

button.addEventListener("click", () => {
  firstH3.innerText = "I changed this text from a button";
});

const myNewDiv = `
<div>
    <p>Lorem ipsum</p>
</div>
`;

const mySection = document.querySelector("#exampleSection");
mySection.innerHTML = myNewDiv;

console.log(firstH3.classList);

firstH3.classList.add("hidden");

console.log(firstH3.childNodes);
