// const apiUrl = "https://rickandmortyapi.com/api/character";
// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     createCards(data.results);
//     console.log(data);
//   });
// // function createCards(person) {
// //   const main = document.querySelector('[data-js=main]');
// //   const h2 = document.createElement('h2');
// //   h2.textContent = "Morty";
// //   main.append(h2);
// //   const image = document.createElement('img');
// //   main.append(image);
// //   image.src = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";

// // //   const card = document.createElement('section');
// // //   const ulist = document.createElement('ul');
// // //   card.innerHTML = `<img src=${character.image} alt="">``

// // //   // main.classList.add('list');
// // //   // main.append(ulist);
// // //   // const li = document.createElement(‘li’);
// // //   // ulist.append(li);

// // //     person.forEach(Skills => {
// // //     const item = document.createElement('li')
// // //     const characterSkills = [
// // //       `Name : ${Skills.name}`,
// // //       `gender : ${Skills.gender}`,
// // //       `species : ${Skills.species}`,
// // //       `img : ${Skills.image}`,
// // //     ];
// // //     ulist.append(item);
// // //     console.log(characterSkills)
// // //     characterSkills.forEach(character => {
// // //     })
// // //   })
// // // }

export default function characterData() {
  const subTitle = document.createElement('h2');
  subTitle.classList.add('subtitle');
  subTitle.textContent = "All those Characters";
  document.getElementById('main_area').append(subTitle);

  fetch('https://rickandmortyapi.com/api/character/')
    .then(results => results.json())
    .then(data => {
      data.results.map(character => {
        console.log(data);

        let section = document.createElement('section');
        section.classList.add('chara_cards');
        section.innerHTML = `<img src=${character.image} alt=${character.name} class="portrait"/>
           <h3>${character.name}</h3>
           <p>status: ${character.status}</p>
           <p>species: ${character.species}</p>
           <p>gender: ${character.gender}</p>
           <p>origin: ${character.origin.name}</p>`;
        document.getElementById('main_area').append(section);
      });
    })
    .catch(error => console.log(error));
}

// section.createElement(button);
// function character(characterSkills) {
//   button.toggle.classList(hidden);