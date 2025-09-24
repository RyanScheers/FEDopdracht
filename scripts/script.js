// JavaScript Document
console.log("hi");

// selecteer de knoppen
const openButton = document.querySelector("header section button"); 
const sluitButton = document.querySelector("header nav button");  
const deNav = document.querySelector("header nav");                

// klik op hamburger → schuif menu naar rechts
openButton.addEventListener("click", () => {
  deNav.classList.add('open');
});

// klik op kruisje → schuif menu terug naar links
sluitButton.addEventListener("click", () => {
  deNav.classList.remove('open');
});







