// const { Linter } = require("eslint");

// import toggleApiButton from './js/_apibutton.js';
console.clear();
const apiUrl = "https://rickandmortyapi.com/api/character";
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    createCards(data.results);
    // console.log(data);
  });

function createCards(person) {

  const main = document.querySelector('[data-js=main]');
  console.log(person);
  const h2 = document.createElement('h2');
  h2.textContent = "Characters";
  main.append(h2);

  const image = document.createElement('img');
  main.append(image);
  image.classList.add('img');
  image.src = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";

  const section = document.createElement('section');
  section.classList.add('section');
  main.append(section);

  const uList = document.createElement('ul');
  section.append(uList);

  person.forEach(data => {
    const item = document.createElement('li');
    main.classList.add('list');
    uList.append(item);

    const characterData = [
      `name : ${data.name}`,
      `gender : ${data.gender}`,
      `species : ${data.species}`,
      `img : ${data.image}`,
    ];

    item.textContent = characterData;

    // console.log(characterData);
    // const li = document.createElement('li');
    // ulist.append(li);
    // characterData.forEach(character => {
  });
};

// function createItem