

// import toggleApiButton from './js/_apibutton.js';
console.clear();
const apiUrl = "https://rickandmortyapi.com/api/character";
fetch(apiUrl)
  .then(response => response.json())
  .then( data => { createCards(data.results);
    console.log(data);
  });
  function createCards(person) {
   const main = document.querySelector('[data-js=main]');
    const ulist = document.createElement('ul');
    const h2 = document.createElement('h2');
    h2.textContent = "Morty";
    main.append(h2);
    main.classList.add('list');
    main.append(ulist);
    // const li = document.createElement('li');
    // ulist.append(li);
    const image = document.createElement('img');
    main.append(image);
    image.src = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";
    person.forEach( Skills => {
    const item = document.createElement('li')
    const characterSkills = [
        `Name : ${Skills.name}`,
        `gender : ${Skills.gender}`,
        `species : ${Skills.species}`,
        `img : ${Skills.image}`,
      ];
     ulist.append(item);
    console.log(characterSkills)
    characterSkills.forEach(character => {
    })
})};
      //console.log(data);



  