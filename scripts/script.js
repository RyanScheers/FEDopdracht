// JavaScript Document
console.log("hi");

// selecteer de knoppen
const openButton = document.querySelector("header section button"); 
const sluitButton = document.querySelector("header nav button");  
const deNav = document.querySelector("header nav");  


const genresKnop = document.querySelector("main section:nth-of-type(8) button");
const genresDiv = document.querySelector("main section:nth-of-type(8) ul");
const buttonTekst = document.querySelector("main section:nth-of-type(8) button h4");

const klantenserviceKnop = document.querySelectorAll("main section:nth-of-type(10) article button");



klantenserviceKnop.forEach((button) => {
  button.addEventListener("click", () => {
    const bijbehorendeLijst = button.closest('article').nextElementSibling;
    const icoon = button.querySelector("svg");

    if (bijbehorendeLijst && bijbehorendeLijst.tagName === 'UL') {
      bijbehorendeLijst.classList.toggle("open");

      if (bijbehorendeLijst.classList.contains("open")) {
        if (icoon) icoon.style.transform = "rotate(180deg)";
      } else {
        if (icoon) icoon.style.transform = "rotate(0deg)";
      }
    }
  });
});


// klik op hamburger → schuif menu naar rechts
openButton.addEventListener("click", () => {
  deNav.classList.add('open');
});

// klik op kruisje → schuif menu terug naar links
sluitButton.addEventListener("click", () => {
  deNav.classList.remove('open');
});





let isVergroot = false;


genresKnop.addEventListener("click", () => {
    if (isVergroot) {
        // verberg ul
        genresDiv.style.display = 'none';
        buttonTekst.textContent = "Meer genres";
        genresKnop.querySelector('svg').style.transform = 'rotate(90deg)';
    } else {
        // laat ul zien
        genresDiv.style.display = 'grid';
        buttonTekst.textContent = "Minder genres";
        genresKnop.querySelector('svg').style.transform = 'rotate(270deg)';
    }
    
    isVergroot = !isVergroot;
});














