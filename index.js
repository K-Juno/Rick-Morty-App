// import toggleApiButton from './js/_apibutton.js';

console.clear();

const apiUrl = 'https://rickandmortyapi.com/api/character';

fetch(apiUrl)
  .then(response => response.json())

  .then(data => {
    createCard(data.results);
    console.log(data);
  });
