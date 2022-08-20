

// import toggleApiButton from './js/_apibutton.js';
console.clear();

const apiUrl = 'https://rickandmortyapi.com/api/character';

fetch(apiUrl)
  .then(response => response.json())

   .then(data => {
    createCard(data.results);
    console.log(data);
  });

  const createCard = () => {
const main = document.querySelector('[data-js=main]');
const section = document.createElement('section');
const header = document.createElement('h2');
//header.textContent = results.name;
const image = document.createElement('img');
//image.src = results.image;
section.style.backgroundColor="hotpink";
section.textContent = 'morty'
main.append(section);
  }

  const characterDetails =  (() => {
    
  })
      //console.log(data);



  