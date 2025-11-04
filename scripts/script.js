// JavaScript Document
console.log("hi");

// selecteer de knoppen
const openButton = document.querySelector("header section button"); 
const sluitButton = document.querySelector("header nav button");  
const deNav = document.querySelector("header nav");  

const main = document.querySelector("main.main1");
const video = main.querySelector("video");

const genresKnop = document.querySelector("main.main1 section:nth-of-type(8) button");
const genresDiv = document.querySelector("main.main1 section:nth-of-type(8) ul");
const buttonTekst = document.querySelector("main.main1 section:nth-of-type(8) h4");

const klantenserviceKnop = document.querySelectorAll("main.main1 section:nth-of-type(10) article button");


window.addEventListener("load", () =>{

const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");
  });

function veranderTekstGrootte(grootte){
  const root = document.documentElement;

  if (grootte === 'klein'){
    root.style.fontSize = '14px';
  } else if (grootte === 'middel') {
    root.style.fontSize = '16px';
  } else if (grootte === 'groot') {
    root.style.fontSize = '18px';
  }
}
// https://chatgpt.com/share/690204cb-6804-8000-a06d-ba77dd7bfc7e


main.querySelector(".play").onclick = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

main.querySelector(".mute").onclick = () => {
  video.muted = !video.muted;
};

main.querySelector(".restart").onclick = () => {
  video.currentTime = 0;
  video.play();
};
// https://chatgpt.com/share/690202bc-d41c-8000-81d3-42ef6e25ed58 
// Ik heb voor het maken van deze knoppen chatgtp om hulp gevraagd

klantenserviceKnop.forEach((button) => {
  button.addEventListener("click", () => {
    const bijbehorendeLijst = button.closest('article').nextElementSibling;
    const icoon = button.querySelector('svg');

    if (bijbehorendeLijst && bijbehorendeLijst.tagName === 'UL') {
      bijbehorendeLijst.classList.toggle('open');

      if (bijbehorendeLijst.classList.contains('open')) {
        if (icoon) {
          icoon.style.transform = 'rotate(180deg)';
        }
      } else {
        if (icoon) {
          icoon.style.transform = 'rotate(0deg)';
        }
      }
    }
  });
});

const klantenserviceKnoptwee = document.querySelectorAll(
  "main.main2 section:nth-of-type(5) article button"
);
klantenserviceKnoptwee.forEach((buttontwee) => {
  buttontwee.addEventListener("click", () => {
    const bijbehorendeLijsttwee = buttontwee.closest("article").nextElementSibling;
    const icoontwee = buttontwee.querySelector("svg");

    if (bijbehorendeLijsttwee && bijbehorendeLijsttwee.tagName === "UL") {
      bijbehorendeLijsttwee.classList.toggle("open");

      if (bijbehorendeLijsttwee.classList.contains("open")) {
        if (icoontwee) {
          icoontwee.style.transform = "rotate(180deg)";
        }
      } else {
        if (icoontwee) {
          icoontwee.style.transform = "rotate(0deg)";
        }
      }
    }
  });
});


openButton.addEventListener("click", () => {
  deNav.classList.add('open');
});


sluitButton.addEventListener("click", () => {
  deNav.classList.remove('open');
});


let isVergroot = false;

genresKnop.addEventListener("click", () => {
    if (isVergroot) {
       
        genresDiv.style.display = 'none';
        buttonTekst.textContent = "Meer genres";  
        genresKnop.querySelector('svg').style.transform = 'rotate(90deg)';
    } else {
       
        genresDiv.style.display = 'grid';
        buttonTekst.textContent = "Minder genres";
        genresKnop.querySelector('svg').style.transform = 'rotate(270deg)';
    }
    
    isVergroot = !isVergroot;
});
